describe("The greetingsMsg function", function(){
  it("should return Hello, Mandisi! when greeeted in English", function(){
    assert.equal(greetingsMsg('Mandisi', 'English'), 'Hello, Mandisi');
  })
  it("should return Dumela, Mandisi! when greeted in Setswana", function(){
    assert.equal(greetingsMsg('Mandisi', 'Setswana'), 'Dumela, Mandisi');
  })
  it("should return Molo, Mandisi! when greeted in IsiXhosa", function(){
    assert.equal(greetingsMsg('Mandisi', 'IsiXhosa'), 'Molo, Mandisi');
  })
});
