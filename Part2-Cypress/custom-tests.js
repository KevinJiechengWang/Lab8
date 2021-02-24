describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(function($el) {
      expect($el).to.have.value(75);
    })
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(function($el) {
      expect($el).to.have.value(33);
    })
  });

  it('Volume of audio element changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.prop('volume', 0.33);
    })
  });

  it('Image and sound changes when selecting party horn radio button', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then(function($el) {
      expect($el).to.have.attr('src', "./assets/media/audio/party-horn.mp3");
    });
    cy.get('#sound-image').then(function($el) {
      expect($el).to.have.attr('src', "./assets/media/images/party-horn.svg")
    });
  });

  it('Volume image changes when changing volume', () => {
    cy.get('#volume-number').clear().type('70');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-3.svg");
    });
    cy.get('#volume-number').clear().type('40');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-2.svg");
    });
    cy.get('#volume-number').clear().type('10');
    cy.get('#volume-image').then(function($el) {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-1.svg");
    });
  });

  it('Honk should be disabled when: input is empty or non-number', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(function($el) {
      expect($el).to.have.attr('disabled');
    });

    cy.get('#volume-number').clear().type('AAAAAAAA');
    cy.get('#honk-btn').then(function($el) {
      expect($el).to.have.attr('disabled');
    });
  });

  it("Error is shown when a number outside of range is given", () => {
    cy.get('#volume-number').clear().type('10000000')
    .then($el => $el[0].checkValidity()).should('be.false');
  });

});
