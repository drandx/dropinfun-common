export const VALID_EMAIL_REGEX = "[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const VALID_US_ZIPCODE_REGEX = "^[0-9]{5}(?:-[0-9]{4})?$";

export const VALID_PHONE_NUMBER_REGEX = "^[0-9]*$";

export const VALID_ONLY_NUMBER_REGEX = "\\d*";

export const VALID_NAME_REGEX = "^([A-Za-z-. ']+)";

export const VALID_TEXT_REGEX = "^[a-zA-Z ]*$";

export const VALID_TEXT_AND_NUMBER_REGEX = "^[a-zA-Z0-9 ]*$";

export const VALID_ADDRESS_REGEX = "^([A-Za-z0-9\. -',]+)";

export const VALID_WEBSITE_REGEX = "(https?:\/\/)?(www\\.)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)|(https?:\/\/)?(www\\.)?(?!ww)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)";

export const VALID_PASSWORD_REGEX = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$&_@*~\\-=]).{8,}$";

export const VALID_DATE_REGEX = "^\d{1,2}\/\d{1,2}\/\d{4}$";

export const VALID_TEXT_WITH_ESPECIAL_CARACTER_REGEX = "^[a-zA-Z0-9-_:. ]*$";

export const VALID_US_STATE_REGEX = "^(Alabama|alabama|Alaska|alaska|Arizona|arizona|Arkansas|arkansas|California|california|Colorado|colorado|Connecticut|connecticut|Delaware|delaware|Florida|florida|Georgia|georgia|Hawaii|hawaii|Idaho|idaho|Illinois|illinois|Indiana|indiana|Iowa|iowa|Kansas|kansas|Kentucky|kentucky|Louisiana|louisiana|Maine|maine|Maryland|maryland|Massachusetts|massachusetts|Michigan|michigan|Minnesota|minnesota|Mississippi|mississippi|Missouri|missouri|Montana|montana|Nebraska|nebraska|Nevada|Nevada|New\\sHampshire|new\\shampshire|New\\sJersey|new\\sjersey|New\\sMexico|new\\smexico|New\\sYork|new\\syork|North\\sCarolina|north\\scarolina|North\\sDakota|north\\sdakota|Ohio|ohio|Oklahoma|oklahoma|Oregon|oregon|Pennsylvania|pennsylvania|Rhode\\sIsland|rhode\\sisland|South\\sCarolina|south\\scarolina|South\\sDakota|south\\sdakota|Tennessee|tennessee|Texas|texas|Utah|utah|Vermont|vermont|Virginia|virginia|Washington|washington|West\\sVirginia|west\\svirginia|Wisconsin|wisconsin|Wyoming|wyoming|AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY)*$";

export const VALID_US_CITY_REGEX = "^^[^-\\s][a-zA-Z0-9 _\\s-]+$";

export const VALID_SPECIAL_INSTRUCTIONS_REGEX = "^[a-zA-Z0-9-.,;_!\"%&/()=+:? ]*$";

export const VALID_TEXTAREA_REGEX = "^[a-zA-Z0-9-.,;_!\"%&/()=+:?¿'@ ]*$";

export const VALID_LICENSE_NUMBER_REGEX = "^[a-zA-Z0-9-]*$";