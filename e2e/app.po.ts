import { browser, element, by } from 'protractor';

export class KhaxaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('khaxa-root h1')).getText();
  }
}
