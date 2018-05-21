import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "userboarding_text_851296";
    item['en'] = "Plase Let us know more about You";
    
    item = {};
    this.items.push(item);
    item['key'] = "userboarding_field_113652";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "userboarding_field2_27440";
    item['en'] = "Full Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "userboarding_button_992455";
    item['en'] = "Proceed";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_field_36496";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_field2_582872";
    item['en'] = "Full Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_field_941654";
    item['en'] = "Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_field2_664451";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_field2_681012";
    item['en'] = "Email";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_button_252846";
    item['en'] = "Proceed";
    
    item = {};
    this.items.push(item);
    item['key'] = "news_text_637033";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "news_text2_365775";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "onboarding_text_161620";
    item['en'] = "Hello ";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
