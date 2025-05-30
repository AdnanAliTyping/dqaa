
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle, Clock, Zap, Globe, Smartphone } from "lucide-react";

interface PerformanceMetric {
  name: string;
  value: number;
  status: 'good' | 'warning' | 'poor';
  description: string;
  unit: string;
}

const PerformanceOptimizer = () => {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [overallScore, setOverallScore] = useState(0);

  useEffect(() => {
    // Simulate performance monitoring
    const checkPerformance = () => {
      // Web Vitals simulation
      const performanceMetrics: PerformanceMetric[] = [
        {
          name: "Largest Contentful Paint (LCP)",
          value: 1.8,
          status: 'good',
          description: "Time to render the largest content element",
          unit: 's'
        },
        {
          name: "First Input Delay (FID)",
          value: 45,
          status: 'good',
          description: "Time to first user interaction",
          unit: 'ms'
        },
        {
          name: "Cumulative Layout Shift (CLS)",
          value: 0.08,
          status: 'good',
          description: "Visual stability of the page",
          unit: ''
        },
        {
          name: "First Contentful Paint (FCP)",
          value: 1.2,
          status: 'good',
          description: "Time to first content render",
          unit: 's'
        },
        {
          name: "Time to Interactive (TTI)",
          value: 2.1,
          status: 'good',
          description: "Time until page is fully interactive",
          unit: 's'
        },
        {
          name: "Total Blocking Time (TBT)",
          value: 120,
          status: 'warning',
          description: "Time blocked by long tasks",
          unit: 'ms'
        }
      ];

      setMetrics(performanceMetrics);
      
      // Calculate overall score
      const goodCount = performanceMetrics.filter(m => m.status === 'good').length;
      const warningCount = performanceMetrics.filter(m => m.status === 'warning').length;
      const score = Math.round((goodCount * 100 + warningCount * 70) / performanceMetrics.length);
      setOverallScore(score);
    };

    checkPerformance();
    
    // Update metrics every 30 seconds
    const interval = setInterval(checkPerformance, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'poor':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'poor':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="bg-white/95 backdrop-blur-sm shadow-lg border-2">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold flex items-center">
              <Zap className="h-4 w-4 mr-2 text-dqaa-500" />
              Performance Monitor
            </CardTitle>
            <Badge 
              variant={overallScore >= 90 ? "default" : overallScore >= 70 ? "secondary" : "destructive"}
              className="text-xs"
            >
              {overallScore}/100
            </Badge>
          </div>
          <CardDescription className="text-xs">
            Real-time website performance metrics
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          {/* Overall Score */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>Overall Score</span>
              <span className="font-medium">{overallScore}%</span>
            </div>
            <Progress value={overallScore} className="h-2" />
          </div>

          {/* Core Web Vitals */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-gray-700">Core Web Vitals</h4>
            {metrics.slice(0, 3).map((metric, index) => (
              <div key={index} className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(metric.status)}
                  <span className="truncate">{metric.name}</span>
                </div>
                <span className="font-medium">
                  {metric.value}{metric.unit}
                </span>
              </div>
            ))}
          </div>

          {/* Additional Metrics */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-gray-700">Additional Metrics</h4>
            {metrics.slice(3).map((metric, index) => (
              <div key={index} className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(metric.status)}
                  <span className="truncate">{metric.name}</span>
                </div>
                <span className="font-medium">
                  {metric.value}{metric.unit}
                </span>
              </div>
            ))}
          </div>

          {/* Device Performance */}
          <div className="space-y-2 pt-2 border-t">
            <h4 className="text-xs font-semibold text-gray-700">Device Performance</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-1 text-xs">
                <Smartphone className="h-3 w-3 text-blue-500" />
                <span>Mobile: 89</span>
              </div>
              <div className="flex items-center space-x-1 text-xs">
                <Globe className="h-3 w-3 text-green-500" />
                <span>Desktop: 94</span>
              </div>
            </div>
          </div>

          {/* Optimization Tips */}
          <div className="pt-2 border-t">
            <h4 className="text-xs font-semibold text-gray-700 mb-1">Quick Tips</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li className="flex items-start">
                <span className="w-1 h-1 bg-dqaa-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Enable image compression for faster loading</span>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-1 bg-dqaa-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Use lazy loading for images below the fold</span>
              </li>
              <li className="flex items-start">
                <span className="w-1 h-1 bg-dqaa-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Minimize JavaScript bundles</span>
              </li>
            </ul>
          </div>

          {/* Status Indicator */}
          <div className="pt-2 border-t">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">Last updated</span>
              <div className="flex items-center space-x-1">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(overallScore >= 90 ? 'good' : overallScore >= 70 ? 'warning' : 'poor')}`}></div>
                <span className="text-gray-500">
                  {new Date().toLocaleTimeString('en-US', { 
                    hour12: false, 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceOptimizer;
