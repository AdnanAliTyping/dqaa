
export class NotificationService {
  private static instance: NotificationService;
  private registration: ServiceWorkerRegistration | null = null;

  private constructor() {}

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  async init(): Promise<void> {
    if ('serviceWorker' in navigator) {
      try {
        this.registration = await navigator.serviceWorker.ready;
      } catch (error) {
        console.error('Service Worker not ready:', error);
      }
    }
  }

  async requestPermission(): Promise<boolean> {
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications');
      return false;
    }

    if (Notification.permission === 'granted') {
      return true;
    }

    if (Notification.permission === 'denied') {
      return false;
    }

    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  async showNotification(title: string, options?: NotificationOptions): Promise<void> {
    if (!this.registration) {
      await this.init();
    }

    if (!this.registration || Notification.permission !== 'granted') {
      return;
    }

    const defaultOptions: NotificationOptions = {
      icon: '/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png',
      badge: '/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png',
      vibrate: [100, 50, 100],
      ...options
    };

    await this.registration.showNotification(title, defaultOptions);
  }

  async scheduleNotification(title: string, options: NotificationOptions, delay: number): Promise<void> {
    setTimeout(() => {
      this.showNotification(title, options);
    }, delay);
  }
}

export const notificationService = NotificationService.getInstance();
