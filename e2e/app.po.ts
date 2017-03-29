import { browser, element, by } from 'protractor';

export class NightlifePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nl-root h1')).getText();
  }
}
