/**
 * @fileoverview RowList 클래스파일
 * @author NHN Ent. FE Development Team
 */
'use strict';

var Collection = require('../base/collection');
var Row = require('./row');

/**
  * View Model rowList collection
  * @module model/rowList
  * @extends module:base/collection
  */
var RowList = Collection.extend(/**@lends module:model/rowList.prototype */{
    model: Row,
    /**
     * @constructs
     * @param {Object} rawData - Raw data
     * @param {Object} options - Options
     */
    initialize: function(rawData, options) {
        this.setOwnProperties({
            dataModel: options.dataModel,
            columnModel: options.columnModel
        });
    }
});

module.exports = RowList;
