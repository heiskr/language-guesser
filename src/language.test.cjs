const Language = require('./language');

describe('buildModel', () => {
  it('should add models for each language', () => {
    // Mock data
    const data = {
      script1: {
        language1: 'model1',
        language2: 'model2',
      },
      script2: {
        language3: 'model3',
        language4: 'model4',
      },
    };

    // Mock the addModel method
    Language.addModel = jest.fn();

    // Call the buildModel method
    Language.buildModel(data);

    // Verify that addModel was called with the correct arguments
    expect(Language.addModel).toHaveBeenCalledWith('script1', 'language1', 'model1');
    expect(Language.addModel).toHaveBeenCalledWith('script1', 'language2', 'model2');
    expect(Language.addModel).toHaveBeenCalledWith('script2', 'language3', 'model3');
    expect(Language.addModel).toHaveBeenCalledWith('script2', 'language4', 'model4');
  });
});