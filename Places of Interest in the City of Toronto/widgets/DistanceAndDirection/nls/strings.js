﻿define({
  root: ({
    _widgetLabel: "Distance and Direction",
    tabLineTitle: "Line",
    tabCircleTitle: "Circle",
    tabEllipseTitle: "Ellipse",
    tabRingsTitle: "Rings",
    multipleNotationsMessage: " notations that match your input. Please confirm which you would like to use:",
    invalidCoordinateMessage: "Invalid Coordinate",
    confirmInputNotationMessage: "Confirm Input Notation",
    prefixSuffixMessage: "The input coordinate has been detected as having both a prefix and suffix for the latitude or longitude value, returned coordinate is based on the prefix.",
    rememberDecisionMessage: "Remember my decision and do not ask again.<br/>",
    majorAxisTooltipMessage: "Click length of major axis",
    minorAxisTooltipMessage: "Move mouse back to start position to set minor axis & finish drawing ellipse",
    clickToFinishLineMessage: "Click to finish drawing line",
    doubleClickEllipseMesage: "Double-click to finish drawing range rings",
    invalidCoordinateTypeMessage: "Unable to determine input coordinate type. Please check your input",
    noCenterPointSetMessage: "No center point set. Please check your input",
    ellipseMajorAxis: "Major Axis",
    ellipseMinorAxis: "Minor Axis",
    degreesRangeMessage: "Value must be between 0 and 360",
    millsRangeMessage: "Value must be between 0 and 6400",
    lengthLabel: "Length",
    angleLabel: "Angle",
    startPointLabel: "Start Point",
    endPointLabel: "End Point",
    centerPointLabel: "Center Point",
    distanceTableErrorMessage: "Distance table is empty. Please ensure you enter some distances.",
    setCoordFormatStringMessage: "Set Coordinate Format String",
    prefixMessage: "Add '+/-' prefix to positive and negative numbers",
    ddLabel: "DD",
    ddmLabel: "DDM",
    dmsLabel: "DMS",
    garsLabel: "GARS",
    georefLabel: "GEOREF",
    mgrsLabel: "MGRS",
    usngLabel: "USNG",
    utmLabel: "UTM",
    utmhLabel: "UTM (H)",
    DDLatLongNotation: "Decimal Degrees - Latitude/Longitude",
    DDLongLatNotation: "Decimal Degrees  - Longitude/Latitude",
    DDMLatLongNotation: "Degrees Decimal Minutes - Latitude/Longitude",
    DDMLongLatNotation: "Degrees Decimal Minutes - Longitude/Latitude",
    DMSLatLongNotation: "Degrees Minutes Seconds - Latitude/Longitude",
    DMSLongLatNotation: "Degrees Minutes Seconds - Longitude/Latitude",
    GARSNotation: "GARS",
    GEOREFNotation: "GEOREF",
    MGRSNotation: "MGRS",
    USNGNotation: "USNG",
    UTMBandNotation: "UTM - Band Letter",
    UTMHemNotation: "UTM - Hemisphere (N/S)",
    circleTitle: "Create Circle From",
    radiusLabel: "Radius",
    diameterLabel: "Diameter",
    startPointPlaceHolderLabel: "Enter Coordinates",
    formatInputLabel: "Format Input",
    drawCircleLabel: "Draw Circle",
    drawLineLabel: "Draw Line",
    createCircleInteractivelyLabel: "Create Circle Interactively",
    rangeErrorMessage: "Invalid radius or diameter",
    numericInvalidMessage: "Please enter a numeric value",
    timeLabel: "Time",
    invalidTimeMessage: "Invalid time value",
    hoursLabel: "Hours",
    minutesLabel: "Minutes",
    secondsLabel: "Seconds",
    rateLabel: "Rate",
    invalidDistanceMessage: "Invalid distance value",
    feetSecondsLabel: "Feet / second",
    feetHourLabel: "Feet / hour",
    kmSecondLabel: "Kilometers / second",
    kmHourLabel: "Kilometer / hour",
    metersSecondLabel: "Meters / second",
    metersHourLabel: "Meters / hour",
    milesSecondLabel: "Miles / second",
    milesHourLabel: "Miles / hour",
    nauticalMilesSecondLabel: "Nautical Miles / second",
    nauticalMilesHourLabel: "Nautical Miles / hour",
    clearGraphicsLabel: "Clear Graphics",
    ellipseTypeLabel: "Ellipse Type",
    ellipseSemiLabel: "Semi",
    ellipseFullLabel: "Full",
    drawEllipseLabel: "Draw Ellipse",
    createEllipseInteractively: "Create Ellipse Interactively",
    axisLabel: "Axis",
    unitLabel: "Unit",
    majorRadiusLabel: "Major (Radius)",
    majorDiameterLabel: "Major (Diameter)",
    axisErrorMessage: "Value must be greated than 0",
    minorRadiusLabel: "Minor (Radius)",
    minorDiameterLabel: "Minor (Diameter)",
    orientationLabel: "Orientation",
    orientationErrorMessage: "Value must be between 0 and 360",
    warningMessage: "Warning: Graphics generated using the ellipse tool are not geodetic",
    fromLabel: "From",
    distanceBearingLabel: "Distance and Bearing",
    pointsLabel: "Points",
    createLineInteractively: "Create Line Interactively",
    lengthLabel: "Length",
    lineLengthErrorMessage: "Invalid Line Length",
    degreesLabel: "Degrees",
    milsLabel: "Mils",
    lineTypeLabel: "Type",
    interactiveLabel: "Interactive",
    fixedLabel: "Fixed",
    originLabel: "Origin",
    cumulativeLabel: "Cumulative",
    numberOfRingsLabel: "Number of Rings",
    ringsErrorMessage: "Invalid number of rings",
    distanceBetweenRingsLabel: "Distance Between Rings",
    ringsDecimalErrorMessage: "Enter a numeric value to 2 decimal places",
    distanceUnitsLabel: "Distance Units",
    distancesLabel: "Distances",
    numberOfRadialsLabel: "Number of Radials",
    upLabel: "Up",
    downLabel: "Down",
    deleteLabel: "Delete",
    radialsErrorMessage: "Invalid number of radials. The maximum allowed is 360",
    radialsInvalidMessage: "Invalid value for radials",
    addPointLabel: "Add Point",
    valueLabel: "Value",
    valueText: "Enter Value",
    actionLabel: "Action",
    distanceCalculatorLabel: "Distance Calculator",
    abbrevMetersLabel: "m",
    abbrevFeetLabel: "ft",
    abbrevKmLabel: "km",
    abbrevMilesLabel: "mi",
    abbrevYardsLabel: "yd",
    abbrevNauticalMilesLabel: "nm",
    abbrevDegreesLabel: "°",
    abbrevMilsLabel: "mil",
    abbrevHoursLabel: "h",
    abbrevMinutesLabel: "m",
    abbrevSecondsLabel: "s",
    abbrevFeetSecondsLabel: "ft/s",
    abbrevFeetHourLabel: "ft/h",
    abbrevKmSecondLabel: "km/s",
    abbrevKmHourLabel: "km/h",
    abbrevMetersSecondLabel: "m/s",
    abbrevMetersHourLabel: "m/h",
    abbrevMilesSecondLabel: "mi/s",
    abbrevMilesHourLabel: "mi/h",
    abbrevNauticalMilesSecondLabel: "nm/s",
    abbrevNauticalMilesHourLabel: "nm/h",

    //Publish Panel
    publishDDBtn: "Publish",
    publishTitle: "Publish Graphics",
    ddLayerName: "Published Layer Name", // Shown as label for layer name box
    publishToNewLayer: "Publish results to a new feature layer", //Checkbox label to add layer to web map

    //publishing error messages
    checkService: "Check Service: {0}", //{0} will be replaced in the code so do not remove
    createService: "Create Service: {0}", //{0} will be replaced in the code so do not remove
    unableToCreate: "Unable to create: {0}", //{0} will be replaced in the code so do not remove
    addToDefinition: "Add to definition: {0}", //{0} will be replaced in the code so do not remove
    successfullyPublished: "Successfully published web layer{0}Manage the web layer", //{0} will be replaced in the code so do not remove
    userRole: "Unable to create service because user does not have permissions", //displayed as warning when publishing service
    missingLayerNameMessage: "You must enter a valid layer name before you can publish", //shown as error message for invalid layer name
    invalidLayerName: "Layer name must only contain alpha-numeric characters and underscores", //Shown as validation error on published layer name
    layerNameExists: "Layer name already exists. Please use a different layer name.", //Shown if layer name exists

    //alias strings from nls
    distanceLabel: "Distance",
    centerPointLabel: "Center Point",
    radiusDistance: "Radius Distance",
    radials: "Radials",
    rings: "Rings",
    orientationUnit: "Orientation Unit",
    unitLabel: "Unit",
    radiusUnit: "Radius Unit",
    angleUnitLabel: "Angle Unit",
    radiusUnit: "Radius Unit"
  }),
  "ar": 1,
  "bs": 1,
  "ca": 1,
  "cs": 1,
  "da": 1,
  "de": 1,
  "el": 1,
  "es": 1,
  "et": 1,
  "fi": 1,
  "fr": 1,
  "he": 1,
  "hr": 1,
  "hu": 1,
  "it": 1,
  "id": 1,
  "ja": 1,
  "ko": 1,
  "lt": 1,
  "lv": 1,
  "nb": 1,
  "nl": 1,
  "pl": 1,
  "pt-br": 1,
  "pt-pt": 1,
  "ro": 1,
  "ru": 1,
  "sl": 1,
  "sr": 1,
  "sv": 1,
  "th": 1,
  "tr": 1,
  "uk": 1,
  "vi": 1,
  "zh-cn": 1,
  "zh-hk": 1,
  "zh-tw": 1
});