const ReadLoud = require('../models/ReadLoud');
const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const secretKey = crypto.createHash('sha256').update(String(process.env.SECRET_KEY || '4bhbJ9a8sFhGwY5qSPEY6J8MBYcUDen7')).digest().slice(0, 32);
console.log('secretKey', secretKey);


const encrypt = (text) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
};


exports.createReadLoud = async (req, res) => {
  const { appuni_id, title, content } = req.body;

  try {
    const id = await ReadLoud.create(appuni_id, title, content);
    res.status(201).json({ message: 'Entry created successfully', id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating entry', error: error.message });
  }
};

exports.getReadLoudById = async (req, res) => {
  const { id } = req.params;

  try {
    const entry = await ReadLoud.findById(id);
    if (entry) {
      res.status(200).json(entry);
    } else {
      res.status(404).json({ message: 'Entry not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving entry', error: error.message });
  }
};

exports.updateReadLoud = async (req, res) => {
  const { id } = req.params;
  const { appuni_id, title, content } = req.body;

  try {
    await ReadLoud.update(id, appuni_id, title, content);
    res.status(200).json({ message: 'Entry updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating entry', error: error.message });
  }
};

exports.deleteReadLoud = async (req, res) => {
  const { id } = req.params;

  try {
    await ReadLoud.delete(id);
    res.status(200).json({ message: 'Entry deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting entry', error: error.message });
  }
};


exports.getAllReadLouds = async (req, res) => {
  const { page = 1, limit = 10 } = req.query; // Default to page 1 and limit 10
  const offset = (page - 1) * limit;

  try {
    const results = await ReadLoud.findAll({ limit, offset });
    const total = await ReadLoud.count();
    const encryptedResults = results.map((result) => {
      return {
        ...result,
        title: encrypt(result.title),
        content: encrypt(result.content),
      };
    });

    res.status(200).json({
      total,
      page: parseInt(page),
      limit: parseInt(limit),
      results:encryptedResults
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving entries', error: error.message });
  }
};
