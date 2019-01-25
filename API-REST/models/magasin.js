const oracledb = require('oracledb');

async function getAllMagasins() {
  let conn;
  let result;

  try {
    conn = await oracledb.getConnection();
    console.log('Connected to database...');

    result = await conn.execute('SELECT codemagasin, nommagasin FROM magasins WHERE ROWNUM < 10');
    
  } catch(err) {
    console.log('Error in processing:\n', err);
  } finally {
    if (conn) {
      try {
        await conn.close();
      } catch(err) {
        console.log('Error in closing connection:\n', err);
      }
    }
  }

  return result.rows;
}


async function getMagasinByCodeMagasin(codemagasin) {
  let conn;
  let result;

  try {
    conn = await oracledb.getConnection();
    console.log('Connected to database...');

    const options = { outFormat: oracledb.OBJECT };
    result = await conn.execute('SELECT * FROM magasins WHERE codemagasin = :paramCodeMag', {paramCodeMag: codemagasin}, options);
    
  } catch(err) {
    console.log('Error in processing:\n', err);
  } finally {
    if (conn) {
      try {
        await conn.close();
      } catch(err) {
        console.log('Error in closing connection:\n', err);
      }
    }
  }

  return result.rows[0];
}

exports.getAllMagasins = getAllMagasins;
exports.getMagasinByCodeMagasin = getMagasinByCodeMagasin;