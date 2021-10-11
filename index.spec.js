const Log = require('./dist/index');
const { Err, Warn, Clear } = require('./dist/index');

describe('Sample Test', () => {
  it('should logs', async () => {
    expect(Clear('oi')).toHaveProperty();
  });
  
  it('should logs', async () => {
    expect(Err('oi')).toHaveProperty();
  });
  
  it('should logs', async () => {
    expect(Warn('oi')).toHaveProperty();
  });
  
  it('should logs', async () => {
    expect(Log.default('oi')).toHaveProperty();
  });
});
