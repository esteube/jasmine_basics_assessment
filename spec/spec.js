var myCode = require('./../grader.js')

describe('#letterGrade()', function(){
  it('Get letter grade', function(){
    expect(myCode.letterGrade(5)).toEqual('F');
  });
});


describe('#average()', function(){
  it('Get average score', function(){
    expect(myCode.average([90, 95, 87, 60])).toEqual(83);
  });
});

describe('#medianScore()', function(){
  it('Get median score', function(){
    expect(myCode.average([52,80,80,86,94])).toEqual(78.4);
  });
});
