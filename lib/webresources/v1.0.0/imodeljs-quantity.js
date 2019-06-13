(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("bentleyjs_core"));
	else if(typeof define === 'function' && define.amd)
		define("imodeljs_quantity", ["bentleyjs_core"], factory);
	else if(typeof exports === 'object')
		exports["imodeljs_quantity"] = factory(require("bentleyjs_core"));
	else
		root["imodeljs_quantity"] = factory(root["bentleyjs_core"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__bentley_bentleyjs_core__) {
return (this["webpackJsonp"] = this["webpackJsonp"] || []).push([["imodeljs-quantity"],{

/***/ "./lib/Constants.js":
/*!**************************!*\
  !*** ./lib/Constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
/** Constants used internally for both formatting and parsing.
 * @internal
 */
class QuantityConstants {
    /** Return the decimal separator for the current locale. */
    static get LocaleSpecificDecimalSeparator() {
        if (QuantityConstants._LOCALE_DECIMAL_SEPARATOR.length > 0)
            return QuantityConstants._LOCALE_DECIMAL_SEPARATOR;
        QuantityConstants._LOCALE_DECIMAL_SEPARATOR = ".";
        const matches = (12345.6789).toLocaleString().match(/345(.*)67/);
        if (matches && matches.length > 1)
            QuantityConstants._LOCALE_DECIMAL_SEPARATOR = matches[1];
        return QuantityConstants._LOCALE_DECIMAL_SEPARATOR;
    }
    /** Return the thousand separator for the current locale. */
    static get LocaleSpecificThousandSeparator() {
        if (QuantityConstants._LOCALE_THOUSAND_SEPARATOR.length > 0)
            return QuantityConstants._LOCALE_THOUSAND_SEPARATOR;
        QuantityConstants._LOCALE_THOUSAND_SEPARATOR = ",";
        const matches = (12345.6789).toLocaleString().match(/12(.*)345/);
        if (matches && matches.length > 0)
            QuantityConstants._LOCALE_THOUSAND_SEPARATOR = matches[1];
        return QuantityConstants._LOCALE_THOUSAND_SEPARATOR;
    }
}
QuantityConstants.CHAR_COMMA = 44;
QuantityConstants.CHAR_SPACE = 32;
QuantityConstants.CHAR_NUMBER = 35;
QuantityConstants.CHAR_PLUS = 43;
QuantityConstants.CHAR_MINUS = 45;
QuantityConstants.CHAR_PERIOD = 46;
QuantityConstants.CHAR_SLASH = 47;
QuantityConstants.CHAR_DIVISION_SLASH = 8725;
QuantityConstants.CHAR_FRACTION_SLASH = 8260;
QuantityConstants.CHAR_ONE_QUARTER = 188;
QuantityConstants.CHAR_ONE_HALF = 189;
QuantityConstants.CHAR_THREE_QUARTER = 190;
QuantityConstants.CHAR_DIGIT_ZERO = 48;
QuantityConstants.CHAR_DIGIT_NINE = 57;
QuantityConstants.CHAR_UPPER_E = 69;
QuantityConstants.CHAR_LOWER_E = 101;
QuantityConstants._LOCALE_DECIMAL_SEPARATOR = "";
QuantityConstants._LOCALE_THOUSAND_SEPARATOR = "";
exports.QuantityConstants = QuantityConstants;


/***/ }),

/***/ "./lib/Exception.js":
/*!**************************!*\
  !*** ./lib/Exception.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const bentleyjs_core_1 = __webpack_require__(/*! @bentley/bentleyjs-core */ "@bentley/bentleyjs-core");
/**
 * Status codes used during Quantity parsing and formatting processing.
 * @alpha
 */
var QuantityStatus;
(function (QuantityStatus) {
    QuantityStatus[QuantityStatus["QUANTITY_ERROR_BASE"] = 35039] = "QUANTITY_ERROR_BASE";
    QuantityStatus[QuantityStatus["Success"] = 0] = "Success";
    QuantityStatus[QuantityStatus["InvalidJson"] = 35040] = "InvalidJson";
    QuantityStatus[QuantityStatus["InvalidCompositeFormat"] = 35041] = "InvalidCompositeFormat";
    QuantityStatus[QuantityStatus["UnableToGenerateParseTokens"] = 35042] = "UnableToGenerateParseTokens";
    QuantityStatus[QuantityStatus["NoValueOrUnitFoundInString"] = 35043] = "NoValueOrUnitFoundInString";
    QuantityStatus[QuantityStatus["UnitLabelSuppliedButNotMatched"] = 35044] = "UnitLabelSuppliedButNotMatched";
    QuantityStatus[QuantityStatus["UnknownUnit"] = 35045] = "UnknownUnit";
    QuantityStatus[QuantityStatus["UnableToConvertParseTokensToQuantity"] = 35046] = "UnableToConvertParseTokensToQuantity";
})(QuantityStatus = exports.QuantityStatus || (exports.QuantityStatus = {}));
/** The error type thrown by this module. See [[QuantityStatus]] for `errorNumber` values.
 * @alpha
 */
class QuantityError extends bentleyjs_core_1.BentleyError {
    constructor(errorNumber, message) {
        super(errorNumber, message);
        this.errorNumber = errorNumber;
    }
}
exports.QuantityError = QuantityError;


/***/ }),

/***/ "./lib/Formatter/Format.js":
/*!*********************************!*\
  !*** ./lib/Formatter/Format.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Exception_1 = __webpack_require__(/*! ../Exception */ "./lib/Exception.js");
const Constants_1 = __webpack_require__(/*! ../Constants */ "./lib/Constants.js");
const FormatEnums_1 = __webpack_require__(/*! ./FormatEnums */ "./lib/Formatter/FormatEnums.js");
// cSpell:ignore ZERONORMALIZED, nosign, onlynegative, signalways, negativeparentheses
// cSpell:ignore trailzeroes, keepsinglezero, zeroempty, keepdecimalpoint, applyrounding, fractiondash, showunitlabel, prependunitlabel, exponentonlynegative
/** A class used to both define the specifications for formatting a quantity values and the methods to do the formatting.
 * @alpha
 */
class Format {
    /** Constructor
     *  @param name     The name of a format specification. TODO: make optional or remove
     */
    constructor(name) {
        this._name = "";
        this._roundFactor = 0.0;
        this._type = FormatEnums_1.FormatType.Decimal; // required; options are decimal, fractional, scientific, station
        this._precision = FormatEnums_1.DecimalPrecision.Six; // required
        this._showSignOption = FormatEnums_1.ShowSignOption.OnlyNegative; // options: noSign, onlyNegative, signAlways, negativeParentheses
        this._decimalSeparator = Constants_1.QuantityConstants.LocaleSpecificDecimalSeparator;
        this._thousandSeparator = Constants_1.QuantityConstants.LocaleSpecificThousandSeparator;
        this._uomSeparator = " "; // optional; default is " "; defined separator between magnitude and the unit
        this._stationSeparator = "+"; // optional; default is "+"
        this._formatTraits = 0x0;
        this._spacer = " "; // optional; default is " "
        this._includeZero = true; // optional; default is true
        this._name = name;
    }
    get name() { return this._name; }
    get roundFactor() { return this._roundFactor; }
    get type() { return this._type; }
    get precision() { return this._precision; }
    get minWidth() { return this._minWidth; }
    get scientificType() { return this._scientificType; }
    get showSignOption() { return this._showSignOption; }
    get decimalSeparator() { return this._decimalSeparator; }
    get thousandSeparator() { return this._thousandSeparator; }
    get uomSeparator() { return this._uomSeparator; }
    get stationSeparator() { return this._stationSeparator; }
    get stationOffsetSize() { return this._stationOffsetSize; }
    get formatTraits() { return this._formatTraits; }
    get spacer() { return this._spacer; }
    get includeZero() { return this._includeZero; }
    get units() { return this._units; }
    get hasUnits() { return this._units !== undefined && this._units.length > 0; }
    // parse and toString methods
    static scientificTypeToString(scientificType) {
        if (scientificType === FormatEnums_1.ScientificType.Normalized)
            return "Normalized";
        else
            return "ZeroNormalized";
    }
    /** This method parses input string that is typically extracted for persisted JSON data and validates that the string is a valid ScientificType. Throws exception if not valid. */
    static parseScientificType(scientificType, formatName) {
        switch (scientificType) {
            case "normalized":
                return FormatEnums_1.ScientificType.Normalized;
            case "zeronormalized":
                return FormatEnums_1.ScientificType.ZeroNormalized;
            default:
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${formatName} has an invalid 'SCIENTIFIC_TYPE' attribute.`);
        }
    }
    /** Method used when generating a JSON object that represents this Format. */
    static showSignOptionToString(showSign) {
        switch (showSign) {
            case FormatEnums_1.ShowSignOption.NegativeParentheses:
                return "NegativeParentheses";
            case FormatEnums_1.ShowSignOption.NoSign:
                return "NoSign";
            case FormatEnums_1.ShowSignOption.OnlyNegative:
                return "OnlyNegative";
            case FormatEnums_1.ShowSignOption.SignAlways:
                return "SignAlways";
        }
    }
    /** This method parses input string that is typically extracted for persisted JSON data and validates that the string is a valid ShowSignOption. Throws exception if not valid. */
    static parseShowSignOption(showSignOption, formatName) {
        switch (showSignOption.toLowerCase()) {
            case "nosign":
                return FormatEnums_1.ShowSignOption.NoSign;
            case "onlynegative":
                return FormatEnums_1.ShowSignOption.OnlyNegative;
            case "signalways":
                return FormatEnums_1.ShowSignOption.SignAlways;
            case "negativeparentheses":
                return FormatEnums_1.ShowSignOption.NegativeParentheses;
            default:
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${formatName} has an invalid 'showSignOption' attribute.`);
        }
    }
    /** Method used when generating a JSON object that represents this Format. */
    static formatTraitsToArray(currentFormatTrait) {
        const formatTraitsArr = Array();
        if ((currentFormatTrait & FormatEnums_1.FormatTraits.TrailZeroes) === FormatEnums_1.FormatTraits.TrailZeroes)
            formatTraitsArr.push("trailZeroes");
        if ((currentFormatTrait & FormatEnums_1.FormatTraits.KeepSingleZero) === FormatEnums_1.FormatTraits.KeepSingleZero)
            formatTraitsArr.push("keepSingleZero");
        if ((currentFormatTrait & FormatEnums_1.FormatTraits.ZeroEmpty) === FormatEnums_1.FormatTraits.ZeroEmpty)
            formatTraitsArr.push("zeroEmpty");
        if ((currentFormatTrait & FormatEnums_1.FormatTraits.KeepDecimalPoint) === FormatEnums_1.FormatTraits.KeepDecimalPoint)
            formatTraitsArr.push("keepDecimalPoint");
        if ((currentFormatTrait & FormatEnums_1.FormatTraits.ApplyRounding) === FormatEnums_1.FormatTraits.ApplyRounding)
            formatTraitsArr.push("applyRounding");
        if ((currentFormatTrait & FormatEnums_1.FormatTraits.FractionDash) === FormatEnums_1.FormatTraits.FractionDash)
            formatTraitsArr.push("fractionDash");
        if ((currentFormatTrait & FormatEnums_1.FormatTraits.ShowUnitLabel) === FormatEnums_1.FormatTraits.ShowUnitLabel)
            formatTraitsArr.push("showUnitLabel");
        if ((currentFormatTrait & FormatEnums_1.FormatTraits.PrependUnitLabel) === FormatEnums_1.FormatTraits.PrependUnitLabel)
            formatTraitsArr.push("prependUnitLabel");
        if ((currentFormatTrait & FormatEnums_1.FormatTraits.Use1000Separator) === FormatEnums_1.FormatTraits.Use1000Separator)
            formatTraitsArr.push("use1000Separator");
        if ((currentFormatTrait & FormatEnums_1.FormatTraits.ExponentOnlyNegative) === FormatEnums_1.FormatTraits.ExponentOnlyNegative)
            formatTraitsArr.push("exponentOnlyNegative");
        return formatTraitsArr;
    }
    /** This method parses input string that is typically extracted for persisted JSON data and validates that the string is a valid FormatTrait. Throws exception if not valid. */
    static parseFormatTrait(stringToCheck, currentFormatTrait) {
        let formatTrait = currentFormatTrait;
        switch (stringToCheck.toLowerCase()) {
            case "trailzeroes":
                formatTrait = currentFormatTrait | FormatEnums_1.FormatTraits.TrailZeroes;
                break;
            case "keepsinglezero":
                formatTrait = currentFormatTrait | FormatEnums_1.FormatTraits.KeepSingleZero;
                break;
            case "zeroempty":
                formatTrait = currentFormatTrait | FormatEnums_1.FormatTraits.ZeroEmpty;
                break;
            case "keepdecimalpoint":
                formatTrait = currentFormatTrait | FormatEnums_1.FormatTraits.KeepDecimalPoint;
                break;
            case "applyrounding":
                formatTrait = currentFormatTrait | FormatEnums_1.FormatTraits.ApplyRounding;
                break;
            case "fractiondash":
                formatTrait = currentFormatTrait | FormatEnums_1.FormatTraits.FractionDash;
                break;
            case "showunitlabel":
                formatTrait = currentFormatTrait | FormatEnums_1.FormatTraits.ShowUnitLabel;
                break;
            case "prependunitlabel":
                formatTrait = currentFormatTrait | FormatEnums_1.FormatTraits.PrependUnitLabel;
                break;
            case "use1000separator":
                formatTrait = currentFormatTrait | FormatEnums_1.FormatTraits.Use1000Separator;
                break;
            case "exponentonlynegative":
                formatTrait = currentFormatTrait | FormatEnums_1.FormatTraits.ExponentOnlyNegative;
                break;
            default:
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `Format has an invalid 'formatTraits' option.`);
        }
        return formatTrait;
    }
    /** Method used when generating a JSON object that represents this Format. */
    static formatTypeToString(type) {
        switch (type) {
            case FormatEnums_1.FormatType.Decimal:
                return "Decimal";
            case FormatEnums_1.FormatType.Scientific:
                return "Scientific";
            case FormatEnums_1.FormatType.Station:
                return "Station";
            case FormatEnums_1.FormatType.Fractional:
                return "Fractional";
        }
    }
    /** This method parses input string that is typically extracted for persisted JSON data and validates that the string is a valid FormatType. Throws exception if not valid. */
    static parseFormatType(jsonObjType, formatName) {
        switch (jsonObjType.toLowerCase()) {
            case "decimal":
                return FormatEnums_1.FormatType.Decimal;
            case "scientific":
                return FormatEnums_1.FormatType.Scientific;
            case "station":
                return FormatEnums_1.FormatType.Station;
            case "fractional":
                return FormatEnums_1.FormatType.Fractional;
            default:
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${formatName} has an invalid 'type' attribute.`);
        }
    }
    /** This method validates the input value, that is typically extracted for persisted JSON data, is a valid DecimalPrecision. Throws exception if not valid. */
    static parseDecimalPrecision(jsonObjPrecision) {
        switch (jsonObjPrecision) {
            case 0:
                return FormatEnums_1.DecimalPrecision.Zero;
            case 1:
                return FormatEnums_1.DecimalPrecision.One;
            case 2:
                return FormatEnums_1.DecimalPrecision.Two;
            case 3:
                return FormatEnums_1.DecimalPrecision.Three;
            case 4:
                return FormatEnums_1.DecimalPrecision.Four;
            case 5:
                return FormatEnums_1.DecimalPrecision.Five;
            case 6:
                return FormatEnums_1.DecimalPrecision.Six;
            case 7:
                return FormatEnums_1.DecimalPrecision.Seven;
            case 8:
                return FormatEnums_1.DecimalPrecision.Eight;
            case 9:
                return FormatEnums_1.DecimalPrecision.Nine;
            case 10:
                return FormatEnums_1.DecimalPrecision.Ten;
            case 11:
                return FormatEnums_1.DecimalPrecision.Eleven;
            case 12:
                return FormatEnums_1.DecimalPrecision.Twelve;
            default:
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The 'precision' attribute must be an integer in the range 0-12.`);
        }
    }
    /** This method validates the input value, that is typically extracted for persisted JSON data, is a valid FractionalPrecision. Throws exception if not valid. */
    static parseFractionalPrecision(jsonObjPrecision, formatName) {
        switch (jsonObjPrecision) {
            case 1:
                return FormatEnums_1.FractionalPrecision.One;
            case 2:
                return FormatEnums_1.FractionalPrecision.Two;
            case 4:
                return FormatEnums_1.FractionalPrecision.Four;
            case 8:
                return FormatEnums_1.FractionalPrecision.Eight;
            case 16:
                return FormatEnums_1.FractionalPrecision.Sixteen;
            case 32:
                return FormatEnums_1.FractionalPrecision.ThirtyTwo;
            case 64:
                return FormatEnums_1.FractionalPrecision.SixtyFour;
            case 128:
                return FormatEnums_1.FractionalPrecision.OneHundredTwentyEight;
            case 256:
                return FormatEnums_1.FractionalPrecision.TwoHundredFiftySix;
            default:
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${formatName} has an invalid 'precision' attribute.`);
        }
    }
    /** This method validates the input value, that is typically extracted for persisted JSON data, is a valid DecimalPrecision or FractionalPrecision. Throws exception if not valid. */
    static parsePrecision(precision, formatName, type) {
        switch (type) { // type must be decimal, fractional, scientific, or station
            case FormatEnums_1.FormatType.Decimal:
            case FormatEnums_1.FormatType.Scientific:
            case FormatEnums_1.FormatType.Station:
                return Format.parseDecimalPrecision(precision);
            case FormatEnums_1.FormatType.Fractional:
                return Format.parseFractionalPrecision(precision, formatName);
        }
    }
    verifyFormatTraitsOptions(formatTraitsFromJson) {
        const formatTraits = (Array.isArray(formatTraitsFromJson)) ? formatTraitsFromJson : formatTraitsFromJson.split(/,|;|\|/);
        formatTraits.forEach((formatTraitsString) => {
            this._formatTraits = Format.parseFormatTrait(formatTraitsString, this.formatTraits);
        });
    }
    /** This method returns true if the formatTrait is set in this Format object. */
    hasFormatTraitSet(formatTrait) {
        return (this._formatTraits & formatTrait) === formatTrait;
    }
    async createUnit(unitsProvider, name, label) {
        let newUnit;
        if (name === undefined || typeof (name) !== "string" || (label !== undefined && typeof (label) !== "string")) // throws if name is undefined or name isn't a string or if label is defined and isn't a string
            return Promise.reject(new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `This Composite has a unit with an invalid 'name' or 'label' attribute.`));
        for (const unit of this.units) {
            const unitObj = unit[0].name;
            if (unitObj.toLowerCase() === name.toLowerCase()) // duplicate names are not allowed
                return Promise.reject(new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The unit ${unitObj} has a duplicate name.`));
        }
        newUnit = await unitsProvider.findUnit(name);
        if (!newUnit || !newUnit.isValid)
            return Promise.reject(new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `Invalid unit name '${name}'.`));
        this.units.push([newUnit, label]);
    }
    loadFormatProperties(jsonObj) {
        if (undefined === jsonObj.type) // type is required
            throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} does not have the required 'type' attribute.`);
        if (typeof (jsonObj.type) !== "string")
            throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'type' attribute. It should be of type 'string'.`);
        this._type = Format.parseFormatType(jsonObj.type, this.name);
        if (undefined === jsonObj.precision) // precision is required
            throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} does not have the required 'precision' attribute.`);
        else if (typeof (jsonObj.precision) !== "number") // must be a number
            throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'precision' attribute. It should be of type 'number'.`);
        else if (!Number.isInteger(jsonObj.precision)) // must be an integer
            throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'precision' attribute. It should be an integer.`);
        this._precision = Format.parsePrecision(jsonObj.precision, this.name, this._type);
        if (this.type === FormatEnums_1.FormatType.Scientific) {
            if (undefined === jsonObj.scientificType) // if format type is scientific and scientific type is undefined, throw
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has type 'Scientific' therefore attribute 'scientificType' is required.`);
            if (typeof (jsonObj.scientificType) !== "string")
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'scientificType' attribute. It should be of type 'string'.`);
            this._scientificType = Format.parseScientificType(jsonObj.scientificType.toLowerCase(), this.name);
        }
        if (this.type === FormatEnums_1.FormatType.Station) {
            if (undefined === jsonObj.stationOffsetSize)
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has type 'Station' therefore attribute 'stationOffsetSize' is required.`);
            if (typeof (jsonObj.stationOffsetSize) !== "number")
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'stationOffsetSize' attribute. It should be of type 'number'.`);
            if (!Number.isInteger(jsonObj.stationOffsetSize) || jsonObj.stationOffsetSize <= 0) // must be a positive int > 0
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'stationOffsetSize' attribute. It should be a positive integer.`);
            this._stationOffsetSize = jsonObj.stationOffsetSize;
        }
        if (undefined !== jsonObj.roundFactor) { // optional; default is 0.0
            if (typeof (jsonObj.roundFactor) !== "number")
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'roundFactor' attribute. It should be of type 'number'.`);
            if (jsonObj.roundFactor !== this.roundFactor) // if roundFactor isn't default value of 0.0, reassign roundFactor variable
                this._roundFactor = jsonObj.roundFactor;
        }
        if (undefined !== jsonObj.minWidth) { // optional
            if (typeof (jsonObj.minWidth) !== "number")
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'minWidth' attribute. It should be of type 'number'.`);
            if (!Number.isInteger(jsonObj.minWidth) || jsonObj.minWidth < 0) // must be a positive int
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'minWidth' attribute. It should be a positive integer.`);
            this._minWidth = jsonObj.minWidth;
        }
        if (undefined !== jsonObj.showSignOption) { // optional; default is "onlyNegative"
            if (typeof (jsonObj.showSignOption) !== "string")
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'showSignOption' attribute. It should be of type 'string'.`);
            this._showSignOption = Format.parseShowSignOption(jsonObj.showSignOption, this.name);
        }
        if (undefined !== jsonObj.formatTraits && jsonObj.formatTraits.length !== 0) { // FormatTraits is optional
            if (!Array.isArray(jsonObj.formatTraits) && typeof (jsonObj.formatTraits) !== "string") // must be either an array of strings or a string
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'formatTraits' attribute. It should be of type 'string' or 'string[]'.`);
            this.verifyFormatTraitsOptions(jsonObj.formatTraits); // check that all of the options for formatTraits are valid. If now, throw
        }
        if (undefined !== jsonObj.decimalSeparator) { // optional
            if (typeof (jsonObj.decimalSeparator) !== "string") // not a string or not a one character string
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'decimalSeparator' attribute. It should be of type 'string'.`);
            if (jsonObj.decimalSeparator.length !== 1)
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'decimalSeparator' attribute. It must be a one character string.`);
            this._decimalSeparator = jsonObj.decimalSeparator;
        }
        if (undefined !== jsonObj.thousandSeparator) { // optional
            if (typeof (jsonObj.thousandSeparator) !== "string")
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'thousandSeparator' attribute. It should be of type 'string'.`);
            if (jsonObj.thousandSeparator.length !== 1)
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'thousandSeparator' attribute. It must be a one character string.`);
            this._thousandSeparator = jsonObj.thousandSeparator;
        }
        if (undefined !== jsonObj.uomSeparator) { // optional; default is " "
            if (typeof (jsonObj.uomSeparator) !== "string")
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'uomSeparator' attribute. It should be of type 'string'.`);
            if (jsonObj.uomSeparator.length < 0 || jsonObj.uomSeparator.length > 1)
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'uomSeparator' attribute. It must be empty or a string with a single character.`);
            this._uomSeparator = jsonObj.uomSeparator;
        }
        if (undefined !== jsonObj.stationSeparator) { // optional; default is "+"
            if (typeof (jsonObj.stationSeparator) !== "string")
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'stationSeparator' attribute. It should be of type 'string'.`);
            if (jsonObj.stationSeparator.length !== 1)
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has an invalid 'stationSeparator' attribute. It must be a one character string.`);
            this._stationSeparator = jsonObj.stationSeparator;
        }
    }
    /**
     * Populates this Format with the values from the provided.
     */
    async fromJson(unitsProvider, jsonObj) {
        this.loadFormatProperties(jsonObj);
        if (undefined !== jsonObj.composite) { // optional
            this._units = new Array();
            if (jsonObj.composite.includeZero !== undefined) {
                if (typeof (jsonObj.composite.includeZero) !== "boolean") // includeZero must be a boolean IF it is defined
                    return Promise.reject(new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has a Composite with an invalid 'includeZero' attribute. It should be of type 'boolean'.`));
                this._includeZero = jsonObj.composite.includeZero;
            }
            if (jsonObj.composite.spacer !== undefined) { // spacer must be a string IF it is defined
                if (typeof (jsonObj.composite.spacer) !== "string")
                    return Promise.reject(new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has a Composite with an invalid 'spacer' attribute. It must be of type 'string'.`));
                if (jsonObj.composite.spacer.length < 0 || jsonObj.composite.spacer.length > 1)
                    return Promise.reject(new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has a Composite with an invalid 'spacer' attribute. It must be empty or a string with a single character.`));
                this._spacer = jsonObj.composite.spacer;
            }
            if (jsonObj.composite.units !== undefined) { // if composite is defined, it must be an array with 1-4 units
                if (!Array.isArray(jsonObj.composite.units)) { // must be an array
                    return Promise.reject(new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has a Composite with an invalid 'units' attribute. It must be of type 'array'`));
                }
                if (jsonObj.composite.units.length > 0 && jsonObj.composite.units.length <= 4) { // Composite requires 1-4 units
                    try {
                        const createUnitPromises = [];
                        for (const unit of jsonObj.composite.units) {
                            createUnitPromises.push(this.createUnit(unitsProvider, unit.name, unit.label));
                        }
                        await Promise.all(createUnitPromises);
                    }
                    catch (e) {
                        return Promise.reject(e);
                    }
                }
            }
            if (undefined === this.units || this.units.length === 0)
                return Promise.reject(new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidJson, `The Format ${this.name} has a Composite with no valid 'units'`));
        }
    }
    /**
     * Returns a JSON object that contain the specification for this Format.
     */
    toJson() {
        const schemaJson = {};
        schemaJson.type = Format.formatTypeToString(this.type);
        schemaJson.precision = this.precision;
        schemaJson.roundFactor = this.roundFactor;
        if (undefined !== this.minWidth)
            schemaJson.minWidth = this.minWidth;
        schemaJson.showSignOption = Format.showSignOptionToString(this.showSignOption);
        schemaJson.formatTraits = Format.formatTraitsToArray(this.formatTraits);
        schemaJson.decimalSeparator = this.decimalSeparator;
        schemaJson.thousandSeparator = this.thousandSeparator;
        schemaJson.uomSeparator = this.uomSeparator;
        if (undefined !== this.scientificType)
            schemaJson.scientificType = Format.scientificTypeToString(this.scientificType);
        if (undefined !== this.stationOffsetSize)
            schemaJson.stationOffsetSize = this.stationOffsetSize;
        schemaJson.stationSeparator = this.stationSeparator;
        if (undefined !== this.units) {
            const composite = {};
            composite.spacer = this.spacer;
            composite.includeZero = this.includeZero;
            composite.units = [];
            this.units.forEach((unit) => {
                if (undefined !== unit[1])
                    composite.units.push({
                        name: unit[0].name,
                        label: unit[1],
                    });
                else
                    composite.units.push({
                        name: unit[0].name,
                    });
            });
            schemaJson.composite = composite;
        }
        else { }
        return schemaJson;
    }
}
exports.Format = Format;
/** A class that contains both formatting information and the conversion factors necessary to convert from an input unit to the units specified in the format.
 * @alpha
 */
class FormatterSpec {
    /** Constructor
     *  @param name     The name of a format specification.
     *  @param format   Defines the output format for the quantity value.
     *  @param conversions An array of conversion factors necessary to convert from an input unit to the units specified in the format..
     */
    constructor(name, format, conversions) {
        this._name = "";
        this._conversions = []; // max four entries
        this._name = name;
        this._format = format;
        if (conversions)
            this._conversions = conversions;
    }
    get name() { return this._name; }
    /** Returns an array of UnitConversionSpecs, one for each unit that is to be shown in the formatted quantity string. */
    get unitConversions() { return this._conversions; }
    get format() { return this._format; }
    /** Static async method to create a FormatSpec given the format and unit of the quantity that will be passed to the Formatter. The input unit will
     * be used to generate conversion information for each unit specified in the Format. This method is async due to the fact that the units provider must make
     * async calls to lookup unit definitions.
     *  @param name     The name of a format specification.
     *  @param unitsProvider The units provider is used to look up unit definitions and provide conversion information for converting between units.
     *  @param inputUnit The unit the value to be formatted. This unit is often referred to as persistence unit.
     */
    static async create(name, format, unitsProvider, inputUnit) {
        const conversions = [];
        if (format.units) {
            let convertFromUnit = inputUnit;
            for (const unit of format.units) {
                let unitConversion;
                if (convertFromUnit) {
                    unitConversion = await unitsProvider.getConversion(convertFromUnit, unit[0]);
                }
                else {
                    unitConversion = ({ factor: 1.0, offset: 0.0 });
                }
                const unitLabel = (unit[1] && unit[1].length > 0) ? unit[1] : unit[0].label;
                const spec = ({ name: unit[0].name, label: unitLabel, conversion: unitConversion });
                conversions.push(spec);
                convertFromUnit = unit[0];
            }
        }
        else {
            // if format is only numeric and a input unit is defined set spec to use the input unit as the format unit
            if (inputUnit) {
                const spec = { name: inputUnit.name, label: inputUnit.label, conversion: { factor: 1.0, offset: 0.0 } };
                conversions.push(spec);
            }
        }
        return Promise.resolve(new FormatterSpec(name, format, conversions));
    }
}
exports.FormatterSpec = FormatterSpec;


/***/ }),

/***/ "./lib/Formatter/FormatEnums.js":
/*!**************************************!*\
  !*** ./lib/Formatter/FormatEnums.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
/** @alpha */
var FormatTraits;
(function (FormatTraits) {
    FormatTraits[FormatTraits["TrailZeroes"] = 1] = "TrailZeroes";
    FormatTraits[FormatTraits["KeepSingleZero"] = 2] = "KeepSingleZero";
    FormatTraits[FormatTraits["ZeroEmpty"] = 4] = "ZeroEmpty";
    FormatTraits[FormatTraits["KeepDecimalPoint"] = 8] = "KeepDecimalPoint";
    FormatTraits[FormatTraits["ApplyRounding"] = 16] = "ApplyRounding";
    FormatTraits[FormatTraits["FractionDash"] = 32] = "FractionDash";
    FormatTraits[FormatTraits["ShowUnitLabel"] = 64] = "ShowUnitLabel";
    FormatTraits[FormatTraits["PrependUnitLabel"] = 128] = "PrependUnitLabel";
    FormatTraits[FormatTraits["Use1000Separator"] = 256] = "Use1000Separator";
    FormatTraits[FormatTraits["ExponentOnlyNegative"] = 512] = "ExponentOnlyNegative";
})(FormatTraits = exports.FormatTraits || (exports.FormatTraits = {}));
/** @alpha */
var FractionalPrecision;
(function (FractionalPrecision) {
    FractionalPrecision[FractionalPrecision["One"] = 1] = "One";
    FractionalPrecision[FractionalPrecision["Two"] = 2] = "Two";
    FractionalPrecision[FractionalPrecision["Four"] = 4] = "Four";
    FractionalPrecision[FractionalPrecision["Eight"] = 8] = "Eight";
    FractionalPrecision[FractionalPrecision["Sixteen"] = 16] = "Sixteen";
    FractionalPrecision[FractionalPrecision["ThirtyTwo"] = 32] = "ThirtyTwo";
    FractionalPrecision[FractionalPrecision["SixtyFour"] = 64] = "SixtyFour";
    FractionalPrecision[FractionalPrecision["OneHundredTwentyEight"] = 128] = "OneHundredTwentyEight";
    FractionalPrecision[FractionalPrecision["TwoHundredFiftySix"] = 256] = "TwoHundredFiftySix";
})(FractionalPrecision = exports.FractionalPrecision || (exports.FractionalPrecision = {}));
/** @alpha */
var DecimalPrecision;
(function (DecimalPrecision) {
    DecimalPrecision[DecimalPrecision["Zero"] = 0] = "Zero";
    DecimalPrecision[DecimalPrecision["One"] = 1] = "One";
    DecimalPrecision[DecimalPrecision["Two"] = 2] = "Two";
    DecimalPrecision[DecimalPrecision["Three"] = 3] = "Three";
    DecimalPrecision[DecimalPrecision["Four"] = 4] = "Four";
    DecimalPrecision[DecimalPrecision["Five"] = 5] = "Five";
    DecimalPrecision[DecimalPrecision["Six"] = 6] = "Six";
    DecimalPrecision[DecimalPrecision["Seven"] = 7] = "Seven";
    DecimalPrecision[DecimalPrecision["Eight"] = 8] = "Eight";
    DecimalPrecision[DecimalPrecision["Nine"] = 9] = "Nine";
    DecimalPrecision[DecimalPrecision["Ten"] = 10] = "Ten";
    DecimalPrecision[DecimalPrecision["Eleven"] = 11] = "Eleven";
    DecimalPrecision[DecimalPrecision["Twelve"] = 12] = "Twelve";
})(DecimalPrecision = exports.DecimalPrecision || (exports.DecimalPrecision = {}));
/** @alpha */
var FormatType;
(function (FormatType) {
    FormatType[FormatType["Decimal"] = 0] = "Decimal";
    FormatType[FormatType["Fractional"] = 1] = "Fractional";
    FormatType[FormatType["Scientific"] = 2] = "Scientific";
    FormatType[FormatType["Station"] = 3] = "Station";
})(FormatType = exports.FormatType || (exports.FormatType = {}));
/** @alpha */
var ScientificType;
(function (ScientificType) {
    ScientificType[ScientificType["Normalized"] = 0] = "Normalized";
    ScientificType[ScientificType["ZeroNormalized"] = 1] = "ZeroNormalized";
})(ScientificType = exports.ScientificType || (exports.ScientificType = {}));
/** @alpha */
var ShowSignOption;
(function (ShowSignOption) {
    ShowSignOption[ShowSignOption["NoSign"] = 0] = "NoSign";
    ShowSignOption[ShowSignOption["OnlyNegative"] = 1] = "OnlyNegative";
    ShowSignOption[ShowSignOption["SignAlways"] = 2] = "SignAlways";
    ShowSignOption[ShowSignOption["NegativeParentheses"] = 3] = "NegativeParentheses";
})(ShowSignOption = exports.ShowSignOption || (exports.ShowSignOption = {}));


/***/ }),

/***/ "./lib/Formatter/Formatter.js":
/*!************************************!*\
  !*** ./lib/Formatter/Formatter.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const Constants_1 = __webpack_require__(/*! ../Constants */ "./lib/Constants.js");
const Exception_1 = __webpack_require__(/*! ../Exception */ "./lib/Exception.js");
const FormatEnums_1 = __webpack_require__(/*! ./FormatEnums */ "./lib/Formatter/FormatEnums.js");
/**  rounding additive
 * @internal
 */
const FPV_ROUNDFACTOR = 0.50000000001;
/** A private helper class used to format fraction part of value into a numerator and denominator.
 * @internal
 */
class FractionalNumeric {
    constructor(value, precision, reduce) {
        this._integral = 0;
        this._numerator = 0;
        this._denominator = 1;
        this._greatestCommonFactor = 1;
        this._textParts = [];
        this.calculate(value, precision);
        this.formTextParts(reduce);
    }
    calculate(value, denominator) {
        const positiveValue = Math.abs(value);
        this._denominator = denominator;
        this._integral = Math.floor(positiveValue);
        const fractionPart = positiveValue - this._integral;
        this._numerator = Math.floor(fractionPart * this._denominator + FPV_ROUNDFACTOR);
        if (0 !== denominator && (this._numerator / this._denominator) === 1) {
            this._numerator = 0;
            this._integral += 1;
        }
        else {
            this._greatestCommonFactor = this.getGreatestCommonFactor(this._numerator, this._denominator);
        }
    }
    /** Determine the GCD given two values. This value can be used to reduce a fraction.
     * See algorithm description http://en.wikipedia.org/wiki/Euclidean_algorithm
     */
    getGreatestCommonFactor(numerator, denominator) {
        let r;
        while (denominator !== 0) {
            r = numerator % denominator;
            numerator = denominator;
            denominator = r;
        }
        return (numerator < 0) ? -numerator : numerator;
    }
    get greatestCommonFactor() { return this._greatestCommonFactor; }
    get hasFractionPart() { return this._textParts.length > 0; }
    get isZero() { return 0 === this._numerator; }
    getIntegralString() {
        if (this._textParts.length > 0)
            return this._textParts[0];
        return "";
    }
    getNumeratorString() {
        if (this._textParts.length >= 3)
            return this._textParts[1];
        return "";
    }
    getDenominatorString() {
        if (this._textParts.length >= 3)
            return this._textParts[2];
        return "";
    }
    formTextParts(reduce) {
        let numerator = this._numerator;
        let denominator = this._denominator;
        if (reduce && this._greatestCommonFactor > 1) {
            numerator /= this.greatestCommonFactor;
            denominator /= this.greatestCommonFactor;
        }
        this._textParts.push(this._integral.toFixed(0));
        if (numerator > 0) {
            this._textParts.push(numerator.toFixed(0));
            this._textParts.push(denominator.toFixed(0));
        }
    }
}
/** A helper class that contains methods used to format quantity values based on a format that are defined via the Format class.
 * @alpha
 */
class Formatter {
    static isNegligible(value) { return (Math.abs(value) < Formatter.FPV_MINTHRESHOLD); }
    /** Return floating point value rounded by specific rounding factor.
     *  @param value    Value to be rounded.
     *  @param roundTo  Rounding factor.
     */
    static roundDouble(value, roundTo) {
        if (Formatter.isNegligible(roundTo))
            return value;
        roundTo = Math.abs(roundTo);
        let rnd = FPV_ROUNDFACTOR + (value / roundTo);
        const iVal = Math.floor(rnd);
        rnd = iVal * roundTo;
        return (value < 0.0) ? -rnd : rnd;
    }
    /** Generate a formatted text string integer value insert 1000 separators if appropriate.
     *  @param wholePart    Integer value to be formatted.
     */
    static integerPartToText(wholePart, spec) {
        // build invariant string represent wholePart
        let formattedValue = wholePart.toFixed(0);
        if ((formattedValue.length > 3) && (spec.format.hasFormatTraitSet(FormatEnums_1.FormatTraits.Use1000Separator) && (spec.format.thousandSeparator.length > 0))) {
            let numSeparators = Math.floor(formattedValue.length / 3);
            let groupLength = formattedValue.length % 3;
            if (groupLength === 0) {
                numSeparators = numSeparators - 1;
                groupLength = groupLength + 3;
            }
            let outString = formattedValue.substr(0, groupLength);
            for (let i = 1; i <= numSeparators; i += 1) {
                outString = outString + spec.format.thousandSeparator + formattedValue.substr(groupLength, 3);
                groupLength = groupLength + 3;
            }
            formattedValue = outString;
        }
        return formattedValue;
    }
    /** Trim trailing "0" from the text that represent the fractional part of a floating point value.
     *  @param strVal   The value string.
     */
    static trimTrailingZeroes(strVal) {
        let lastNonZeroCharIndex = -1;
        for (let i = strVal.length - 1; i >= 0; i--) {
            if (strVal.charCodeAt(i) !== Constants_1.QuantityConstants.CHAR_DIGIT_ZERO) {
                lastNonZeroCharIndex = i;
                break;
            }
        }
        if (lastNonZeroCharIndex >= 0)
            return strVal.substr(0, lastNonZeroCharIndex + 1);
        return "";
    }
    /** Format a quantity value into a composite format such as ft-in or deg-min-sec.
     *  @param compositeValue   The value for this part of the composite
     *  @param isLastPart       If false the composite value should be a whole value, if true then the value should be formatted as a floating point value.
     *  @param label            Label for this part of the composite. This will be either the default unit label or a custom label specified the format specification.
     */
    static formatCompositePart(compositeValue, isLastPart, label, spec) {
        let componentText = "";
        if (!isLastPart) {
            componentText = Formatter.integerPartToText(compositeValue, spec);
        }
        else {
            componentText = Formatter.formatMagnitude(compositeValue, spec);
        }
        if (spec.format.hasFormatTraitSet(FormatEnums_1.FormatTraits.ShowUnitLabel)) {
            componentText = componentText + spec.format.uomSeparator + label;
        }
        else {
            if (!isLastPart)
                componentText = componentText + ":";
        }
        return componentText;
    }
    /** Format a quantity value into a composite format such as ft-in or deg-min-sec.
     *  @param magnitude   quantity value
     *  @param fromUnit    quantity unit
     */
    static formatComposite(magnitude, spec) {
        const compositeStrings = [];
        // Caller will deal with appending +||-||() value sign as specified by formatting options so just format positive value
        let posMagnitude = Math.abs(magnitude);
        if ((Math.abs(posMagnitude) < 0.0001) && spec.format.hasFormatTraitSet(FormatEnums_1.FormatTraits.ZeroEmpty))
            return "";
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < spec.unitConversions.length; i++) {
            const currentLabel = spec.unitConversions[i].label;
            const unitConversion = spec.unitConversions[i].conversion;
            if (unitConversion.factor < 1.0)
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidCompositeFormat, `The Format ${spec.format.name} has a invalid unit specification..`);
            if (i > 0 && unitConversion.offset !== 0)
                throw new Exception_1.QuantityError(Exception_1.QuantityStatus.InvalidCompositeFormat, `The Format ${spec.format.name} has a invalid unit specification..`);
            const unitValue = (posMagnitude * unitConversion.factor) + unitConversion.offset + Formatter.FPV_MINTHRESHOLD; // offset should only ever be defined for major unit
            if (i < spec.format.units.length - 1) {
                const wholePart = Math.floor(unitValue);
                const componentText = Formatter.formatCompositePart(wholePart, false, currentLabel, spec);
                posMagnitude = unitValue - wholePart;
                compositeStrings.push(componentText);
            }
            else {
                const componentText = Formatter.formatCompositePart(unitValue, true, currentLabel, spec);
                compositeStrings.push(componentText);
            }
        }
        return compositeStrings.join(spec.format.spacer ? spec.format.spacer : "");
    }
    /** Format a quantity value into a single text string. Imitate how formatting done by server method NumericFormatSpec::FormatDouble.
     *  @param magnitude   quantity value
     */
    static formatMagnitude(magnitude, spec) {
        let posMagnitude = Math.abs(magnitude);
        if ((Math.abs(posMagnitude) < 0.0001) && spec.format.hasFormatTraitSet(FormatEnums_1.FormatTraits.ZeroEmpty))
            return "";
        if (spec.format.hasFormatTraitSet(FormatEnums_1.FormatTraits.ApplyRounding))
            posMagnitude = Math.abs(Formatter.roundDouble(magnitude, spec.format.roundFactor));
        const isSci = ((posMagnitude > 1.0e12) || spec.format.type === FormatEnums_1.FormatType.Scientific);
        const isDecimal = (isSci || spec.format.type === FormatEnums_1.FormatType.Decimal);
        const isFractional = (!isDecimal && spec.format.type === FormatEnums_1.FormatType.Fractional);
        /*const usesStops = spec.format.type === FormatType.Station;*/
        const isPrecisionZero = spec.format.precision === FormatEnums_1.DecimalPrecision.Zero;
        const isKeepSingleZero = spec.format.hasFormatTraitSet(FormatEnums_1.FormatTraits.KeepSingleZero);
        const precisionScale = Math.pow(10.0, spec.format.precision);
        const isKeepTrailingZeroes = spec.format.hasFormatTraitSet(FormatEnums_1.FormatTraits.TrailZeroes);
        let expInt = 0.0;
        if (isSci && (posMagnitude !== 0.0)) {
            let exp = Math.log10(posMagnitude);
            let negativeExp = false;
            if (exp < 0.0) {
                exp = -exp;
                negativeExp = true;
            }
            expInt = Math.floor(exp);
            if (spec.format.type === FormatEnums_1.FormatType.Scientific) {
                if (spec.format.scientificType === FormatEnums_1.ScientificType.ZeroNormalized && posMagnitude > 1.0)
                    expInt += 1.0;
                else if (spec.format.scientificType === FormatEnums_1.ScientificType.Normalized && posMagnitude < 1.0)
                    expInt += 1.0;
                if (negativeExp)
                    expInt = -expInt;
            }
            const factor = Math.pow(10.0, -expInt);
            posMagnitude *= factor;
        }
        let formattedValue = "";
        if (isDecimal) {
            const actualVal = isPrecisionZero ? posMagnitude + FPV_ROUNDFACTOR : posMagnitude + Formatter.FPV_MINTHRESHOLD;
            let wholePart = Math.floor(actualVal);
            let fractionPart = actualVal - wholePart;
            if (!isPrecisionZero) {
                fractionPart = Math.abs(fractionPart) * precisionScale + FPV_ROUNDFACTOR;
                if (fractionPart >= precisionScale) {
                    wholePart += 1;
                    fractionPart -= precisionScale;
                }
            }
            formattedValue = Formatter.integerPartToText(wholePart, spec);
            if (isPrecisionZero) {
                if (isKeepSingleZero) {
                    formattedValue = formattedValue + spec.format.decimalSeparator + "0";
                }
            }
            else {
                fractionPart = Math.floor(fractionPart) / precisionScale;
                let fractionString = fractionPart.toFixed(spec.format.precision);
                // remove leading "0."
                fractionString = fractionString.substr(2).padEnd(spec.format.precision, "0");
                if (!isKeepTrailingZeroes)
                    fractionString = Formatter.trimTrailingZeroes(fractionString);
                if (fractionString.length > 0)
                    formattedValue = formattedValue + spec.format.decimalSeparator + fractionString;
                else {
                    if (spec.format.hasFormatTraitSet(FormatEnums_1.FormatTraits.KeepDecimalPoint))
                        formattedValue = formattedValue + spec.format.decimalSeparator;
                }
            }
            if (isSci) {
                const expString = "e" + expInt.toFixed(0);
                formattedValue = formattedValue + expString;
            }
        }
        else if (isFractional) {
            const fn = new FractionalNumeric(posMagnitude, spec.format.precision, true);
            formattedValue = fn.getIntegralString();
            if (!fn.isZero && fn.hasFractionPart) {
                const wholeFractionSeparator = spec.format.hasFormatTraitSet(FormatEnums_1.FormatTraits.FractionDash) ? "-" : " ";
                const fractionString = fn.getNumeratorString() + "/" + fn.getDenominatorString();
                formattedValue = formattedValue + wholeFractionSeparator + fractionString;
            }
        }
        else /* if (usesStops)*/ {
            // we assume that stopping value is always positive
            const denominator = (Math.pow(10, spec.format.stationOffsetSize));
            const tVal = Math.floor(posMagnitude); // this is the integer part only
            const hiPart = Math.floor(tVal / denominator);
            const lowPart = tVal - hiPart * denominator;
            const fract = posMagnitude - tVal;
            const fractionPart = Math.floor(0.5 + fract * precisionScale);
            const stationString = hiPart.toFixed(0) + spec.format.stationSeparator + lowPart.toFixed(0).padStart(spec.format.stationOffsetSize, "0");
            let fractionString = "";
            if (fractionPart > 0) {
                fractionString = fractionPart.toFixed(0).padEnd(spec.format.precision, "0");
                if (!isKeepTrailingZeroes)
                    fractionString = Formatter.trimTrailingZeroes(fractionString);
                formattedValue = stationString + spec.format.decimalSeparator + fractionString;
            }
            else {
                if (isKeepTrailingZeroes)
                    fractionString = spec.format.decimalSeparator + "".padEnd(spec.format.precision, "0");
                else if (spec.format.hasFormatTraitSet(FormatEnums_1.FormatTraits.KeepDecimalPoint))
                    fractionString = spec.format.decimalSeparator;
                formattedValue = stationString + fractionString;
            }
        }
        return formattedValue;
    }
    /** Format a quantity value into a single text string based on the current format specification of this class.
     *  @param magnitude   defines the value to spec.format.
     *  @param spec      A FormatterSpec object the defines specification for the magnitude and unit conversions for the formatter.
     */
    static formatQuantity(magnitude, spec) {
        const valueIsNegative = magnitude < 0.0;
        let prefix = "";
        let suffix = "";
        let formattedValue = "";
        switch (spec.format.showSignOption) {
            case FormatEnums_1.ShowSignOption.NegativeParentheses:
                if (valueIsNegative) {
                    prefix = "(";
                    suffix = ")";
                }
                break;
            case FormatEnums_1.ShowSignOption.OnlyNegative:
                if (valueIsNegative)
                    prefix = "-";
                break;
            case FormatEnums_1.ShowSignOption.SignAlways:
                if (valueIsNegative)
                    prefix = "-";
                else
                    prefix = "+";
                break;
            case FormatEnums_1.ShowSignOption.NoSign:
            default:
                break;
        }
        let formattedMagnitude = "";
        if (spec.format.hasUnits) {
            formattedMagnitude = Formatter.formatComposite(magnitude, spec);
        }
        else {
            // unitless quantity
            formattedMagnitude = Formatter.formatMagnitude(magnitude, spec);
            if (formattedMagnitude.length > 0 && spec.unitConversions.length > 0 && spec.format.hasFormatTraitSet(FormatEnums_1.FormatTraits.ShowUnitLabel)) {
                if (spec.format.hasFormatTraitSet(FormatEnums_1.FormatTraits.PrependUnitLabel))
                    formattedMagnitude = spec.unitConversions[0].label + spec.format.uomSeparator + formattedMagnitude;
                else
                    formattedMagnitude = formattedMagnitude + spec.format.uomSeparator + spec.unitConversions[0].label;
            }
        }
        // add Sign prefix and suffix as necessary
        if ((prefix.length > 0 || suffix.length > 0) && formattedMagnitude.length > 0)
            formattedValue = prefix + formattedMagnitude + suffix;
        else
            formattedValue = formattedMagnitude;
        if (spec.format.minWidth && spec.format.minWidth < formattedValue.length)
            formattedValue.padStart(spec.format.minWidth, " ");
        return formattedValue;
    }
}
// tslint:disable-next-line:naming-convention
Formatter.FPV_MINTHRESHOLD = 1.0e-14;
exports.Formatter = Formatter;


/***/ }),

/***/ "./lib/Parser.js":
/*!***********************!*\
  !*** ./lib/Parser.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
const Exception_1 = __webpack_require__(/*! ./Exception */ "./lib/Exception.js");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./lib/Constants.js");
const Quantity_1 = __webpack_require__(/*! ./Quantity */ "./lib/Quantity.js");
const FormatEnums_1 = __webpack_require__(/*! ./Formatter/FormatEnums */ "./lib/Formatter/FormatEnums.js");
/** A ParserSpec holds information needed to parse a string into a quantity synchronously.
 * @alpha
 */
class ParserSpec {
    /** Constructor
     *  @param outUnit     The name of a format specification.
     *  @param format   Defines the output format for the quantity value.
     *  @param conversions An array of conversion factors necessary to convert from an input unit to the units specified in the format..
     */
    constructor(outUnit, format, conversions) {
        this._conversions = []; // max four entries
        this._outUnit = outUnit;
        this._format = format;
        this._conversions = conversions;
    }
    /** Returns an array of UnitConversionSpecs for each unit label that may be used in the input string. */
    get unitConversions() { return this._conversions; }
    get format() { return this._format; }
    get outUnit() { return this._outUnit; }
    /** Static async method to create a FormatSpec given the format and unit of the quantity that will be passed to the Formatter. The input unit will
     * be used to generate conversion information for each unit specified in the Format. This method is async due to the fact that the units provider must make
     * async calls to lookup unit definitions.
     *  @param name     The name of a format specification.
     *  @param unitsProvider The units provider is used to look up unit definitions and provide conversion information for converting between units.
     *  @param inputUnit The unit the value to be formatted. This unit is often referred to as persistence unit.
     */
    static async create(format, unitsProvider, outUnit) {
        const conversions = await Parser.createUnitConversionSpecsForUnit(unitsProvider, outUnit);
        return Promise.resolve(new ParserSpec(outUnit, format, conversions));
    }
}
exports.ParserSpec = ParserSpec;
/** A ParseToken holds either a numeric or string token extracted from a string that represents a quantity value.
 * @alpha
 */
class ParseToken {
    constructor(value) {
        if (typeof value === "string")
            this.value = value.trim();
        else
            this.value = value;
    }
    get isString() { return typeof this.value === "string"; }
    get isNumber() { return typeof this.value === "number"; }
}
/** A ScientificToken holds an index and string representing the exponent.
 * @alpha
 */
class ScientificToken {
    constructor(index, exponent) {
        this.exponent = "";
        this.index = index;
        if (exponent)
            this.exponent = exponent;
    }
}
/** A FractionToken holds an index and the fraction value of numerator / denominator.
 * @alpha
 */
class FractionToken {
    constructor(index, fraction) {
        this.fraction = 0.0;
        this.exponent = "";
        this.index = index;
        if (fraction)
            this.fraction = fraction;
    }
}
/** A Parser class that is used to break a string that represents a quantity value into tokens.
 * @alpha
 */
class Parser {
    static checkForScientificNotation(index, stringToParse, uomSeparatorToIgnore) {
        let exponentString = "";
        let i = index + 1;
        for (; i < stringToParse.length; i++) {
            const charCode = stringToParse.charCodeAt(i);
            if (Parser.isDigit(charCode) || ((charCode === Constants_1.QuantityConstants.CHAR_MINUS || charCode === Constants_1.QuantityConstants.CHAR_PLUS) && (i === (index + 1)))) {
                exponentString = exponentString.concat(stringToParse[i]);
            }
            else {
                i = uomSeparatorToIgnore === charCode ? i : i - 1;
                break;
            }
        }
        if (exponentString.length > 1 || ((exponentString.length === 1) && (exponentString.charCodeAt(0) !== Constants_1.QuantityConstants.CHAR_MINUS) && (exponentString.charCodeAt(0) !== Constants_1.QuantityConstants.CHAR_PLUS)))
            return new ScientificToken(i, exponentString);
        return new ScientificToken(index);
    }
    static checkForFractions(index, stringToParse, uomSeparatorToIgnore, numeratorStr) {
        let numeratorToken = "";
        let denominatorToken = "";
        let processingNumerator = true;
        let i = index;
        if (numeratorStr && numeratorStr.length > 0) {
            numeratorToken = numeratorStr;
            processingNumerator = false;
        }
        for (; i < stringToParse.length; i++) {
            const charCode = stringToParse.charCodeAt(i);
            if (Parser.isDigit(charCode)) {
                if (processingNumerator) {
                    numeratorToken = numeratorToken.concat(stringToParse[i]);
                }
                else {
                    denominatorToken = denominatorToken.concat(stringToParse[i]);
                }
            }
            else {
                if (processingNumerator && (charCode === Constants_1.QuantityConstants.CHAR_SLASH || charCode === Constants_1.QuantityConstants.CHAR_DIVISION_SLASH || charCode === Constants_1.QuantityConstants.CHAR_DIVISION_SLASH)) {
                    processingNumerator = false;
                }
                else {
                    if (uomSeparatorToIgnore !== charCode)
                        i = i - 1; // skip over uom separator after fraction
                    break;
                }
            }
        }
        if (numeratorToken.length > 0 && denominatorToken.length > 0) {
            const numerator = parseInt(numeratorToken, 10);
            const denominator = parseInt(denominatorToken, 10);
            if (denominator > 0)
                return new FractionToken(i, numerator / denominator);
            return new FractionToken(i);
        }
        return new FractionToken(index + 1);
    }
    static isDigit(charCode) {
        return (charCode >= Constants_1.QuantityConstants.CHAR_DIGIT_ZERO) && (charCode <= Constants_1.QuantityConstants.CHAR_DIGIT_NINE);
    }
    static isDigitOrDecimalSeparator(charCode, format) {
        return (charCode === format.decimalSeparator.charCodeAt(0)) || Parser.isDigit(charCode);
    }
    /** Parse the quantity string and return and array of ParseTokens that represent the component invariant values and unit labels.
     * @param quantitySpecification The quantity string to ba parsed.
     */
    static parseQuantitySpecification(quantitySpecification, format) {
        const tokens = [];
        const str = quantitySpecification.trim();
        let processingNumber = false;
        let wipToken = "";
        let signToken = "";
        let uomSeparatorToIgnore = 0;
        let fractionDashCode = 0;
        const skipCodes = [format.thousandSeparator.charCodeAt(0)];
        if (format.type === FormatEnums_1.FormatType.Station && format.stationSeparator && format.stationSeparator.length === 1)
            skipCodes.push(format.stationSeparator.charCodeAt(0));
        if (format.type === FormatEnums_1.FormatType.Fractional && format.hasFormatTraitSet(FormatEnums_1.FormatTraits.FractionDash)) {
            fractionDashCode = Constants_1.QuantityConstants.CHAR_MINUS;
        }
        if (format.uomSeparator && format.uomSeparator !== " " && format.uomSeparator.length === 1) {
            uomSeparatorToIgnore = format.uomSeparator.charCodeAt(0);
            skipCodes.push(uomSeparatorToIgnore);
        }
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i);
            if (Parser.isDigitOrDecimalSeparator(charCode, format)) {
                if (!processingNumber) {
                    if (wipToken.length > 0) {
                        tokens.push(new ParseToken(wipToken));
                        wipToken = "";
                    }
                    processingNumber = true;
                }
                wipToken = wipToken.concat(str[i]);
            }
            else {
                if (processingNumber) {
                    if (charCode === Constants_1.QuantityConstants.CHAR_SLASH || charCode === Constants_1.QuantityConstants.CHAR_FRACTION_SLASH || charCode === Constants_1.QuantityConstants.CHAR_DIVISION_SLASH) {
                        const fractSymbol = Parser.checkForFractions(i + 1, str, uomSeparatorToIgnore, wipToken);
                        let fraction = fractSymbol.fraction;
                        i = fractSymbol.index;
                        if (fractSymbol.fraction !== 0.0) {
                            wipToken = "";
                            if (signToken.length > 0) {
                                if (signToken === "-")
                                    fraction = 0 - fraction;
                                signToken = "";
                            }
                            tokens.push(new ParseToken(fraction));
                            processingNumber = false;
                            continue;
                        }
                    }
                    else {
                        // a space may signify end of number or start of decimal
                        if (charCode === Constants_1.QuantityConstants.CHAR_SPACE || charCode === fractionDashCode) {
                            const fractSymbol = Parser.checkForFractions(i + 1, str, uomSeparatorToIgnore);
                            let fraction = fractSymbol.fraction;
                            if (fractSymbol.fraction !== 0.0) {
                                i = fractSymbol.index;
                                if (signToken.length > 0) {
                                    wipToken = signToken + wipToken;
                                    if (signToken === "-")
                                        fraction = 0 - fraction;
                                    signToken = "";
                                }
                                const valueWithFraction = parseFloat(wipToken) + fraction;
                                tokens.push(new ParseToken(valueWithFraction));
                                processingNumber = false;
                                wipToken = "";
                            }
                            continue;
                        }
                        else {
                            // an "E" or "e" may signify scientific notation
                            if (charCode === Constants_1.QuantityConstants.CHAR_UPPER_E || charCode === Constants_1.QuantityConstants.CHAR_LOWER_E) {
                                const exponentSymbol = Parser.checkForScientificNotation(i, str, uomSeparatorToIgnore);
                                i = exponentSymbol.index;
                                if (exponentSymbol.exponent && exponentSymbol.exponent.length > 0) {
                                    if (signToken.length > 0) {
                                        wipToken = signToken + wipToken;
                                        signToken = "";
                                    }
                                    wipToken = wipToken + "e" + exponentSymbol.exponent;
                                    const scientificValue = Number(wipToken);
                                    tokens.push(new ParseToken(scientificValue));
                                    processingNumber = false;
                                    wipToken = "";
                                    continue;
                                }
                            }
                        }
                    }
                    // ignore any codes in skipCodes
                    if (skipCodes.findIndex((ref) => ref === charCode) !== -1)
                        continue;
                    if (signToken.length > 0) {
                        wipToken = signToken + wipToken;
                        signToken = "";
                    }
                    tokens.push(new ParseToken(parseFloat(wipToken)));
                    wipToken = (i < str.length) ? str[i] : "";
                    processingNumber = false;
                }
                else {
                    // not processing a number
                    if (charCode === Constants_1.QuantityConstants.CHAR_PLUS || charCode === Constants_1.QuantityConstants.CHAR_MINUS) {
                        signToken = str[i];
                        continue;
                    }
                    wipToken = wipToken.concat(str[i]);
                }
            }
        }
        // handle case where end of input string is reached.
        if (wipToken.length > 0) {
            if (processingNumber) {
                if (signToken.length > 0) {
                    wipToken = signToken + wipToken;
                    signToken = "";
                }
                tokens.push(new ParseToken(parseFloat(wipToken)));
                processingNumber = false;
            }
            else {
                tokens.push(new ParseToken(wipToken));
            }
        }
        return tokens;
    }
    static async createQuantityFromParseTokens(tokens, format, unitsProvider) {
        const defaultUnit = format.units && format.units.length > 0 ? format.units[0][0] : undefined;
        // common case where single value is supplied
        if (tokens.length === 1) {
            if (tokens[0].isNumber) {
                return Promise.resolve(new Quantity_1.Quantity(defaultUnit, tokens[0].value));
            }
            else {
                try {
                    const unit = await unitsProvider.findUnit(tokens[0].value, defaultUnit ? defaultUnit.unitFamily : undefined);
                    return Promise.resolve(new Quantity_1.Quantity(unit));
                }
                catch (err) { }
            }
        }
        // common case where single value and single label are supplied
        if (tokens.length === 2) {
            if (tokens[0].isNumber && tokens[1].isString) {
                const unit = await unitsProvider.findUnit(tokens[1].value, defaultUnit ? defaultUnit.unitFamily : undefined);
                return Promise.resolve(new Quantity_1.Quantity(unit, tokens[0].value));
            }
            else { // unit specification comes before value (like currency)
                if (tokens[1].isNumber && tokens[0].isString) {
                    const unit = await unitsProvider.findUnit(tokens[0].value, defaultUnit ? defaultUnit.unitFamily : undefined);
                    return Promise.resolve(new Quantity_1.Quantity(unit, tokens[1].value));
                }
            }
        }
        // common case where there are multiple value/label pairs
        if (tokens.length % 2 === 0) {
            let mag = 0.0;
            let masterUnit = defaultUnit;
            for (let i = 0; i < tokens.length; i = i + 2) {
                if (tokens[i].isNumber && tokens[i + 1].isString) {
                    const value = tokens[i].value;
                    const unit = await unitsProvider.findUnit(tokens[i + 1].value, defaultUnit ? defaultUnit.unitFamily : undefined);
                    if (0 === i) {
                        masterUnit = unit;
                        mag = mag + value;
                    }
                    else {
                        if (masterUnit) {
                            const conversion = await unitsProvider.getConversion(unit, masterUnit);
                            if (mag < 0.0)
                                mag = mag - ((value * conversion.factor)) + conversion.offset;
                            else
                                mag = mag + ((value * conversion.factor)) + conversion.offset;
                        }
                    }
                }
            }
            return Promise.resolve(new Quantity_1.Quantity(masterUnit, mag));
        }
        return Promise.resolve(new Quantity_1.Quantity(defaultUnit));
    }
    /** Async method to generate a Quantity given a string that represents a quantity value and likely a unit label.
     *  @param inString A string that contains text represent a quantity.
     *  @param format   Defines the likely format of inString.
     *  @param unitsProvider required to look up units that may be specified in inString
     */
    static async parseIntoQuantity(inString, format, unitsProvider) {
        const tokens = Parser.parseQuantitySpecification(inString, format);
        if (tokens.length === 0)
            return Promise.resolve(new Quantity_1.Quantity());
        return Parser.createQuantityFromParseTokens(tokens, format, unitsProvider);
    }
    /** method to get the Unit Conversion given a unit label */
    static tryFindUnitConversion(unitLabel, unitsConversions) {
        if (unitsConversions.length > 0) {
            const label = unitLabel.toLocaleLowerCase();
            for (const conversion of unitsConversions) {
                if (conversion.parseLabels) {
                    if (-1 !== conversion.parseLabels.findIndex((lbl) => lbl === label))
                        return conversion.conversion;
                }
                else {
                    // tslint:disable-next-line:no-console
                    console.log("ERROR: Parser expects to find parseLabels array populate with all possible unit labels for the unit.");
                }
            }
        }
        return undefined;
    }
    static getQuantityValueFromParseTokens(tokens, format, unitsConversions) {
        const defaultUnit = format.units && format.units.length > 0 ? format.units[0][0] : undefined;
        // common case where single value is supplied
        if (tokens.length === 1) {
            if (tokens[0].isNumber) {
                if (defaultUnit) {
                    const conversion = Parser.tryFindUnitConversion(defaultUnit.label, unitsConversions);
                    if (conversion) {
                        const value = tokens[0].value * conversion.factor + conversion.offset;
                        return { value, status: Exception_1.QuantityStatus.Success };
                    }
                }
                // if no conversion or no defaultUnit, just return parsed number
                return { value: tokens[0].value, status: Exception_1.QuantityStatus.UnknownUnit };
            }
            else {
                // only the unit label was specified so assume magnitude of 1
                const conversion = Parser.tryFindUnitConversion(tokens[0].value, unitsConversions);
                if (undefined !== conversion)
                    return { value: conversion.factor + conversion.offset, status: Exception_1.QuantityStatus.Success };
                else
                    return { status: Exception_1.QuantityStatus.NoValueOrUnitFoundInString };
            }
        }
        // common case where single value and single label are supplied
        if (tokens.length === 2) {
            if (tokens[0].isNumber && tokens[1].isString) {
                const conversion = Parser.tryFindUnitConversion(tokens[1].value, unitsConversions);
                if (conversion) {
                    const value = tokens[0].value * conversion.factor + conversion.offset;
                    return { value, status: Exception_1.QuantityStatus.Success };
                }
                // if no conversion, just return parsed number and ignore value in second token
                return { value: tokens[0].value, status: Exception_1.QuantityStatus.UnitLabelSuppliedButNotMatched };
            }
            else { // unit specification comes before value (like currency)
                if (tokens[1].isNumber && tokens[0].isString) {
                    const conversion = Parser.tryFindUnitConversion(tokens[0].value, unitsConversions);
                    if (conversion) {
                        const value = tokens[1].value * conversion.factor + conversion.offset;
                        return { value, status: Exception_1.QuantityStatus.Success };
                    }
                    // if no conversion, just return parsed number and ignore value in second token
                    return { value: tokens[1].value, status: Exception_1.QuantityStatus.UnitLabelSuppliedButNotMatched };
                }
            }
        }
        // common case where there are multiple value/label pairs
        if (tokens.length % 2 === 0) {
            let mag = 0.0;
            for (let i = 0; i < tokens.length; i = i + 2) {
                if (tokens[i].isNumber && tokens[i + 1].isString) {
                    const value = tokens[i].value;
                    const conversion = Parser.tryFindUnitConversion(tokens[i + 1].value, unitsConversions);
                    if (conversion) {
                        if (mag < 0.0)
                            mag = mag - ((value * conversion.factor)) + conversion.offset;
                        else
                            mag = mag + ((value * conversion.factor)) + conversion.offset;
                    }
                }
            }
            return { value: mag, status: Exception_1.QuantityStatus.Success };
        }
        return { status: Exception_1.QuantityStatus.UnableToConvertParseTokensToQuantity };
    }
    /** Method to generate a Quantity given a string that represents a quantity value.
     *  @param inString A string that contains text represent a quantity.
     *  @param parserSpec unit label if not explicitly defined by user. Must have matching entry in supplied array of unitsConversions.
     *  @param defaultValue default value to return if parsing is un successful
     */
    static parseQuantityString(inString, parserSpec) {
        return Parser.parseIntoQuantityValue(inString, parserSpec.format, parserSpec.unitConversions);
    }
    /** Method to generate a Quantity given a string that represents a quantity value and likely a unit label.
     *  @param inString A string that contains text represent a quantity.
     *  @param format   Defines the likely format of inString. Primary unit serves as a default unit if no unit label found in string.
     *  @param unitsConversions dictionary of conversions used to convert from unit used in inString to output quantity
     */
    static parseIntoQuantityValue(inString, format, unitsConversions) {
        const tokens = Parser.parseQuantitySpecification(inString, format);
        if (tokens.length === 0)
            return { status: Exception_1.QuantityStatus.UnableToGenerateParseTokens };
        if (Parser._log) {
            // tslint:disable-next-line:no-console
            console.log(`Parse tokens`);
            let i = 0;
            for (const token of tokens) {
                // tslint:disable-next-line:no-console
                console.log(`  [${i++}] isNumber=${token.isNumber} isString=${token.isString} token=${token.value}`);
            }
        }
        return Parser.getQuantityValueFromParseTokens(tokens, format, unitsConversions);
    }
    /** Async Method used to create an array of UnitConversionSpec entries that can be used in synchronous calls to parse units. */
    static async createUnitConversionSpecsForUnit(unitsProvider, outUnit) {
        const unitConversionSpecs = [];
        const familyUnits = await unitsProvider.getUnitsByFamily(outUnit.unitFamily);
        for (const unit of familyUnits) {
            const conversion = await unitsProvider.getConversion(unit, outUnit);
            const parseLabels = [unit.label.toLocaleLowerCase()];
            // add any alternate labels that may be define by the UnitProp
            if (unit.alternateLabels) {
                unit.alternateLabels.forEach((label) => {
                    const potentialLabel = label.toLocaleLowerCase();
                    if (-1 === parseLabels.findIndex((lbl) => lbl === potentialLabel))
                        parseLabels.push(label.toLocaleLowerCase());
                });
            }
            unitConversionSpecs.push({
                name: unit.name,
                label: unit.label,
                conversion,
                parseLabels,
            });
        }
        return Promise.resolve(unitConversionSpecs);
    }
    /** Async Method used to create an array of UnitConversionSpec entries that can be used in synchronous calls to parse units. */
    static async createUnitConversionSpecs(unitsProvider, outUnitName, potentialParseUnits) {
        const unitConversionSpecs = [];
        const outUnit = await unitsProvider.findUnitByName(outUnitName);
        if (!outUnit || !outUnit.name || 0 === outUnit.name.length) {
            // tslint:disable-next-line:no-console
            console.log(`[Parser.createUnitConversionSpecs] ERROR: Unable to locate out unit ${outUnitName}.`);
            return Promise.resolve(unitConversionSpecs);
        }
        for (const potentialParseUnit of potentialParseUnits) {
            const unit = await unitsProvider.findUnitByName(potentialParseUnit.unitName);
            if (!unit || !unit.name || 0 === unit.name.length) {
                // tslint:disable-next-line:no-console
                console.log(`[Parser.createUnitConversionSpecs] ERROR: Unable to locate potential unit ${potentialParseUnit.unitName}.`);
                continue;
            }
            const conversion = await unitsProvider.getConversion(unit, outUnit);
            const parseLabels = [unit.label.toLocaleLowerCase()];
            // add any alternate labels that may be define by the UnitProp
            if (unit.alternateLabels) {
                unit.alternateLabels.forEach((label) => {
                    const potentialLabel = label.toLocaleLowerCase();
                    if (-1 === parseLabels.findIndex((lbl) => lbl === potentialLabel))
                        parseLabels.push(label.toLocaleLowerCase());
                });
            }
            if (potentialParseUnit.altLabels) {
                potentialParseUnit.altLabels.forEach((label) => {
                    const potentialLabel = label.toLocaleLowerCase();
                    if (-1 === parseLabels.findIndex((lbl) => lbl === potentialLabel))
                        parseLabels.push(label.toLocaleLowerCase());
                });
            }
            unitConversionSpecs.push({
                name: unit.name,
                label: unit.label,
                conversion,
                parseLabels,
            });
        }
        return Promise.resolve(unitConversionSpecs);
    }
}
Parser._log = false;
exports.Parser = Parser;


/***/ }),

/***/ "./lib/Quantity.js":
/*!*************************!*\
  !*** ./lib/Quantity.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
/** The Quantity class is convenient container to specify both the magnitude and unit of a quantity. This class is commonly
 * returned as the result of parsing a string that represents a quantity.
 * @alpha
 */
class Quantity {
    /** Constructor. The Quantity will only be set as valid if a unit is specified.
     *  @param unit     Defines the quantity's unit.
     *  @param magnitude   Defines the magnitude of the quantity.
     */
    constructor(unit, magnitude) {
        this._magnitude = 0.0;
        this._isValid = false;
        if (undefined !== unit) {
            this._unit = unit;
            this._isValid = true;
        }
        else {
            this._unit = { name: "unknown", label: "unknown", unitFamily: "unknown", isValid: false };
        }
        if (undefined !== magnitude)
            this._magnitude = magnitude;
    }
    get unit() { return this._unit; }
    get magnitude() { return this._magnitude; }
    get isValid() { return this._isValid; }
    /** Convert a Quantity to the specified unit given the UnitConversion.
     *  @param toUnit   The new unit for the quantity.
     *  @param conversion  Defines the information needed to convert the Quantity's magnitude from the current unit to another unit. This conversion info is usually
     *                     returned from the UnitsProvider.
     */
    convertTo(toUnit, conversion) {
        const newMagnitude = (this.magnitude * conversion.factor) + conversion.offset;
        return new Quantity(toUnit, newMagnitude);
    }
}
exports.Quantity = Quantity;


/***/ }),

/***/ "./lib/Unit.js":
/*!*********************!*\
  !*** ./lib/Unit.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** This class provides basic implementation of UnitProps interface.
 * @alpha
 */
class BasicUnit {
    constructor(name, label, unitFamily, alternateLabels) {
        this.name = "";
        this.label = "";
        this.unitFamily = "";
        this.isValid = false;
        if (name && name.length > 0 && label && label.length > 0 && unitFamily && unitFamily.length > 0) {
            this.name = name;
            this.label = label;
            this.unitFamily = unitFamily;
            this.alternateLabels = alternateLabels;
            this.isValid = true;
        }
    }
}
exports.BasicUnit = BasicUnit;
/** This class is a convenience class that can be returned when a valid Unit cannot be determined.
 * @alpha
 */
class BadUnit {
    constructor() {
        this.name = "";
        this.label = "";
        this.unitFamily = "";
        this.isValid = false;
    }
}
exports.BadUnit = BadUnit;


/***/ }),

/***/ "./lib/imodeljs-quantity.js":
/*!**********************************!*\
  !*** ./lib/imodeljs-quantity.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
* Copyright (c) 2019 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
__export(__webpack_require__(/*! ./Constants */ "./lib/Constants.js"));
__export(__webpack_require__(/*! ./Exception */ "./lib/Exception.js"));
__export(__webpack_require__(/*! ./Parser */ "./lib/Parser.js"));
__export(__webpack_require__(/*! ./Quantity */ "./lib/Quantity.js"));
__export(__webpack_require__(/*! ./Unit */ "./lib/Unit.js"));
__export(__webpack_require__(/*! ./Formatter/Format */ "./lib/Formatter/Format.js"));
__export(__webpack_require__(/*! ./Formatter/FormatEnums */ "./lib/Formatter/FormatEnums.js"));
__export(__webpack_require__(/*! ./Formatter/Formatter */ "./lib/Formatter/Formatter.js"));
if (( true) && (typeof window !== "undefined") && window) {
    if (!window.iModelJsVersions)
        window.iModelJsVersions = new Map();
    window.iModelJsVersions.set("imodeljs-quantity", "1.0.0");
}


/***/ }),

/***/ "@bentley/bentleyjs-core":
/*!*********************************!*\
  !*** external "bentleyjs_core" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__bentley_bentleyjs_core__;

/***/ })

},[["./lib/imodeljs-quantity.js","runtime"]]]);
});
//# sourceMappingURL=imodeljs-quantity.js.map