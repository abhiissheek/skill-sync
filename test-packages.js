// test-packages.js
async function testPackages() {
  try {
    const pdf = (await import('pdf-parse')).default;
    console.log('✅ pdf-parse imported successfully');
    
    const mammoth = await import('mammoth');
    console.log('✅ mammoth imported successfully');
  } catch (error) {
    console.error('❌ Package import failed:', error);
  }
}

testPackages();