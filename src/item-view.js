'use strict';

import jquery from './deps/jquery';
import item from './html/item';

/**
 * The ItemView class used to build the view.
 *
 * It's not meant to be used directly.
 */
class ItemView {

  /**
   * Creates a new ItemView instance.
   * @param {object} itemData - The OneDrive item data for this item.
   */
  constructor(itemData = {}) {
    this._itemData = itemData;
  }

  build() {
    const _item = jquery(item);
    _item.addClass('item');
    _item.data('item', this._itemData);
    _item.find('.name').append(this._itemData.name);
    const thumbnails = this._itemData.thumbnails;
    if (thumbnails.length > 0) {
      _item.find('.thumbnail img').attr('src', thumbnails[0].medium.url);
    }
    if (this._itemData.folder) {
      _item.data('folder', 'true');
    }
    return _item;
  }

}

export default ItemView;