class Context {
  constructor(currency, sign, exchangeRate, country) {
    this.currency = currency;
    this.sign = sign;
    this.exchangeRate = exchangeRate;
    this.country = country;
  }

  setCurrency(currency) {
    this.currency = currency;
  }

  setSign(sign) {
    this.sign = sign;
  }

  setExchangeRate(exchangeRate) {
    this.exchangeRate = exchangeRate;
  }

  setCountry(country) {
    this.country = country;
  }
}

const _context = new Context("CAD", "$", 1.3, "CA");
