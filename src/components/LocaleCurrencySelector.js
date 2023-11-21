import React from 'react';

const LocaleCurrencySelector = ({ locales, currencies, selectedLocale, selectedCurrency, onLocaleChange, onCurrencyChange }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Locale and Currency Selector</h2>
      <div className="flex space-x-4">
        <select value={selectedLocale} onChange={(e) => onLocaleChange(e.target.value)}>
          {locales.map((locale) => (
            <option key={locale} value={locale}>
              {locale}
            </option>
          ))}
        </select>
        <select value={selectedCurrency} onChange={(e) => onCurrencyChange(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocaleCurrencySelector;
