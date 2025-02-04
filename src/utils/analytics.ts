import Mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

class Analytics {
  mixpanel = Mixpanel;

  // initialize SDKs
  constructor() {
    if (MIXPANEL_TOKEN) {
      this.mixpanel.init(MIXPANEL_TOKEN, { autotrack: true, debug: process.env.NODE_ENV === 'development' });
    }
  }

  // track event
  track(name: string, props: any) {
    this.mixpanel.track(name, props);
  }
}

export const analytics = new Analytics();
