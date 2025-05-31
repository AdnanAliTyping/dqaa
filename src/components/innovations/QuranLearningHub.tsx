import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Play, Pause, RotateCcw, BookOpen, Bookmark, Volume2, Languages, Info, ExternalLink } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface QuranVerse {
  surah: number;
  ayah: number;
  arabic: string;
  transliteration: string;
  translation: string;
  malayalamTranslation: string;
}

interface BookmarkedVerse {
  id: string;
  verse: QuranVerse;
  notes: string;
  timestamp: Date;
}

const QuranLearningHub = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const [currentVerse, setCurrentVerse] = useState<QuranVerse | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bookmarks, setBookmarks] = useState<BookmarkedVerse[]>([]);
  const [progress, setProgress] = useState({ completed: 15, total: 50 });
  const [selectedSurah, setSelectedSurah] = useState(1);
  const [selectedAyah, setSelectedAyah] = useState(1);
  const [showTranslation, setShowTranslation] = useState(true);
  const [showTransliteration, setShowTransliteration] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Sample Quran verses (In production, this would come from a comprehensive Quran API)
  const sampleVerses: QuranVerse[] = [
    {
      surah: 1,
      ayah: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      transliteration: "Bismillahir-Rahmanir-Raheem",
      translation: "In the name of Allah, the Most Gracious, the Most Merciful",
      malayalamTranslation: "കരുണാനിധിയും കൃപാലുവുമായ അല്ലാഹുവിന്റെ നാമത്തിൽ"
    },
    {
      surah: 1,
      ayah: 2,
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      transliteration: "Alhamdulillahi Rabbil-Alameen",
      translation: "All praise is due to Allah, Lord of all the worlds",
      malayalamTranslation: "സകല പ്രശംസകളും ലോകങ്ങളുടെ പ്രഭുവായ അല്ലാഹുവിനാണ്"
    },
    {
      surah: 2,
      ayah: 255,
      arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
      transliteration: "Allahu la ilaha illa Huwal-Hayyul-Qayyum",
      translation: "Allah - there is no deity except Him, the Ever-Living, the Self-Sustaining",
      malayalamTranslation: "അല്ലാഹു - അവനല്ലാതെ ആരാധ്യനില്ല, നിത്യജീവൻ, സ്വയംനിലനിൽക്കുന്നവൻ"
    }
  ];

  const surahNames = [
    { number: 1, name: "Al-Fatihah", arabicName: "الفاتحة", meaning: "The Opening" },
    { number: 2, name: "Al-Baqarah", arabicName: "البقرة", meaning: "The Cow" },
    { number: 3, name: "Al-Imran", arabicName: "آل عمران", meaning: "The Family of Imran" }
  ];

  useEffect(() => {
    // Load the first verse by default
    setCurrentVerse(sampleVerses[0]);
    
    // Load bookmarks from localStorage
    const savedBookmarks = localStorage.getItem('quran-bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // In production, this would load actual Quran recitation audio
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const loadVerse = (surahNum: number, ayahNum: number) => {
    const verse = sampleVerses.find(v => v.surah === surahNum && v.ayah === ayahNum);
    if (verse) {
      setCurrentVerse(verse);
      setSelectedSurah(surahNum);
      setSelectedAyah(ayahNum);
      setIsPlaying(false);
    }
  };

  const addBookmark = () => {
    if (currentVerse) {
      const bookmark: BookmarkedVerse = {
        id: Date.now().toString(),
        verse: currentVerse,
        notes: '',
        timestamp: new Date()
      };
      const newBookmarks = [...bookmarks, bookmark];
      setBookmarks(newBookmarks);
      localStorage.setItem('quran-bookmarks', JSON.stringify(newBookmarks));
    }
  };

  const removeBookmark = (id: string) => {
    const newBookmarks = bookmarks.filter(b => b.id !== id);
    setBookmarks(newBookmarks);
    localStorage.setItem('quran-bookmarks', JSON.stringify(newBookmarks));
  };

  const nextVerse = () => {
    const currentIndex = sampleVerses.findIndex(v => v.surah === selectedSurah && v.ayah === selectedAyah);
    if (currentIndex < sampleVerses.length - 1) {
      const nextVerse = sampleVerses[currentIndex + 1];
      loadVerse(nextVerse.surah, nextVerse.ayah);
    }
  };

  const previousVerse = () => {
    const currentIndex = sampleVerses.findIndex(v => v.surah === selectedSurah && v.ayah === selectedAyah);
    if (currentIndex > 0) {
      const prevVerse = sampleVerses[currentIndex - 1];
      loadVerse(prevVerse.surah, prevVerse.ayah);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Experimental Feature Disclaimer */}
        <Alert className="mb-6 border-purple-200 bg-purple-50">
          <Info className="h-4 w-4" />
          <AlertDescription className="flex items-center justify-between">
            <div>
              <span className="font-medium">
                {isMalayalam ? "പരീക്ഷണാത്മക AI ഫീച്ചർ" : "Experimental AI Feature"}
              </span>
              {" - "}
              {isMalayalam ? 
                "AI8TY.com വികസിപ്പിച്ച ഡെമോ. സാമ്പിൾ ആയത്തുകളും ഓഡിയോയും മാത്രം." :
                "Demo by AI8TY.com. Sample verses and audio only."
              }
            </div>
            <a 
              href="https://ai8ty.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 ml-2"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </AlertDescription>
        </Alert>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-dqaa-500 mr-3" />
            <h2 className="text-3xl font-bold text-dqaa-900">
              {isMalayalam ? "ഖുർആൻ പഠന കേന്ദ്രം" : "Quran Learning Hub"}
            </h2>
          </div>
          <p className="text-gray-600">
            {isMalayalam ? 
              "ആയത്തുകൾ വായിക്കുക, കേൾക്കുക, മനസ്സിലാക്കുക" :
              "Read, listen, and understand the verses of the Holy Quran"
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Reading Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{isMalayalam ? "പഠന പുരോഗതി" : "Learning Progress"}</span>
                  <Badge variant="secondary">{progress.completed}/{progress.total}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={(progress.completed / progress.total) * 100} className="mb-2" />
                <p className="text-sm text-gray-600">
                  {isMalayalam ? 
                    `${progress.completed} ആയത്തുകൾ പൂർത്തിയാക്കി` :
                    `${progress.completed} verses completed`
                  }
                </p>
              </CardContent>
            </Card>

            {/* Current Verse */}
            {currentVerse && (
              <Card className="bg-gradient-to-br from-dqaa-50 to-green-50">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>
                      {isMalayalam ? 
                        `സൂറ ${currentVerse.surah}, ആയത്ത് ${currentVerse.ayah}` :
                        `Surah ${currentVerse.surah}, Verse ${currentVerse.ayah}`
                      }
                    </CardTitle>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={addBookmark}>
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={playAudio}>
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Arabic Text */}
                  <div className="text-center">
                    <p className="text-3xl leading-relaxed font-arabic text-right mb-4 p-6 bg-white rounded-lg shadow-sm">
                      {currentVerse.arabic}
                    </p>
                  </div>

                  {/* Transliteration */}
                  {showTransliteration && (
                    <div className="text-center">
                      <p className="text-lg text-gray-700 italic mb-2">
                        {currentVerse.transliteration}
                      </p>
                    </div>
                  )}

                  {/* Translation */}
                  {showTranslation && (
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <p className="text-gray-900 mb-2">
                        <strong>{isMalayalam ? "ഇംഗ്ലീഷ് പരിഭാഷ:" : "English Translation:"}</strong>
                      </p>
                      <p className="text-gray-800 mb-4">{currentVerse.translation}</p>
                      
                      {isMalayalam && (
                        <>
                          <p className="text-gray-900 mb-2">
                            <strong>മലയാളം പരിഭാഷ:</strong>
                          </p>
                          <p className="text-gray-800">{currentVerse.malayalamTranslation}</p>
                        </>
                      )}
                    </div>
                  )}

                  {/* Controls */}
                  <div className="flex justify-between items-center pt-4 border-t">
                    <Button variant="outline" onClick={previousVerse}>
                      ← {isMalayalam ? "മുമ്പത്തെ" : "Previous"}
                    </Button>
                    
                    <div className="flex space-x-2">
                      <Button 
                        variant={showTransliteration ? "default" : "outline"} 
                        size="sm"
                        onClick={() => setShowTransliteration(!showTransliteration)}
                      >
                        <Languages className="h-4 w-4 mr-1" />
                        {isMalayalam ? "ലിപ്യന്തരണം" : "Transliteration"}
                      </Button>
                      
                      <Button 
                        variant={showTranslation ? "default" : "outline"} 
                        size="sm"
                        onClick={() => setShowTranslation(!showTranslation)}
                      >
                        <Languages className="h-4 w-4 mr-1" />
                        {isMalayalam ? "പരിഭാഷ" : "Translation"}
                      </Button>
                    </div>
                    
                    <Button variant="outline" onClick={nextVerse}>
                      {isMalayalam ? "അടുത്തത്" : "Next"} →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <audio ref={audioRef} preload="none">
              {/* In production, this would load actual recitation audio files */}
              <source src="/audio/quran-recitation.mp3" type="audio/mpeg" />
            </audio>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Navigation */}
            <Card>
              <CardHeader>
                <CardTitle>{isMalayalam ? "നാവിഗേഷൻ" : "Navigation"}</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="surahs" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="surahs">{isMalayalam ? "സൂറകൾ" : "Surahs"}</TabsTrigger>
                    <TabsTrigger value="bookmarks">{isMalayalam ? "ബുക്ക്മാർക്കുകൾ" : "Bookmarks"}</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="surahs">
                    <ScrollArea className="h-64">
                      <div className="space-y-2">
                        {surahNames.map((surah) => (
                          <Button
                            key={surah.number}
                            variant={selectedSurah === surah.number ? "default" : "ghost"}
                            className="w-full justify-start text-left"
                            onClick={() => loadVerse(surah.number, 1)}
                          >
                            <div>
                              <div className="font-medium">{surah.number}. {surah.name}</div>
                              <div className="text-xs text-gray-500">{surah.arabicName}</div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>
                  
                  <TabsContent value="bookmarks">
                    <ScrollArea className="h-64">
                      <div className="space-y-2">
                        {bookmarks.length === 0 ? (
                          <p className="text-sm text-gray-500 text-center py-8">
                            {isMalayalam ? "ബുക്ക്മാർക്കുകൾ ഇല്ല" : "No bookmarks yet"}
                          </p>
                        ) : (
                          bookmarks.map((bookmark) => (
                            <div
                              key={bookmark.id}
                              className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                              onClick={() => loadVerse(bookmark.verse.surah, bookmark.verse.ayah)}
                            >
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <div className="text-sm font-medium">
                                    {isMalayalam ? 
                                      `സൂറ ${bookmark.verse.surah}:${bookmark.verse.ayah}` :
                                      `Surah ${bookmark.verse.surah}:${bookmark.verse.ayah}`
                                    }
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">
                                    {bookmark.verse.arabic.substring(0, 30)}...
                                  </div>
                                </div>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeBookmark(bookmark.id);
                                  }}
                                >
                                  ×
                                </Button>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </ScrollArea>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Audio Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Volume2 className="h-5 w-5 mr-2" />
                  {isMalayalam ? "ഓഡിയോ നിയന്ത്രണം" : "Audio Controls"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button onClick={playAudio} className="w-full">
                    {isPlaying ? (
                      <>
                        <Pause className="h-4 w-4 mr-2" />
                        {isMalayalam ? "നിർത്തുക" : "Pause"}
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        {isMalayalam ? "കേൾക്കുക" : "Play"}
                      </>
                    )}
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    {isMalayalam ? "ആവർത്തിക്കുക" : "Repeat"}
                  </Button>
                  
                  <div className="text-xs text-gray-500 text-center">
                    {isMalayalam ? 
                      "ഖാരി അബ്ദുൽ ബാസിത്ത് റഹ്മത്തുല്ലാഹി അലൈഹി" :
                      "Reciter: Abdul Basit (Sample)"
                    }
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuranLearningHub;
