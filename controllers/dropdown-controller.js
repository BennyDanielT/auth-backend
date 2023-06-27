const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(
  __dirname,
  '..',
  'models',
  'dropdown-model.json',
);

// Define the path to the JSON file
// const dataFilePath = '../models/dropdown-model.json';

module.exports = {
  getProvinces: function (req, res) {
    try {
      // Read the JSON file
      const data = fs.readFileSync(dataFilePath, 'utf8');
      const jsonData = JSON.parse(data).provinces;
      //   console.log('JSON Data: ', jsonData);
      // Extract provinces from the JSON data
      const provinces = jsonData.map((provinceData) => ({
        province: provinceData.province,
      }));

      res.json({ provinces });
      //   console.log('Provinces: ', provinces);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch provinces' });
    }
  },

  getRegions: function (req, res) {
    try {
      const { province } = req.body;

      // Read the JSON file
      const data = fs.readFileSync(dataFilePath, 'utf8');
      const jsonData = JSON.parse(data).provinces;

      // Find the selected province in the JSON data
      const provinceData = jsonData.find((data) => data.province === province);
      if (!provinceData) {
        return res.status(404).json({ error: 'Province not found' });
      }

      // Extract regions from the selected province
      const regions = provinceData.regions.map((regionData) => ({
        region: regionData.region,
      }));

      res.json({ regions });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch regions' });
    }
  },

  getStores: function (req, res) {
    try {
      const { province, region } = req.body;

      // Read the JSON file
      const data = fs.readFileSync(dataFilePath, 'utf8');
      const jsonData = JSON.parse(data).provinces;

      // Find the selected province in the JSON data
      const provinceData = jsonData.find((data) => data.province === province);
      if (!provinceData) {
        return res.status(404).json({ error: 'Province not found' });
      }

      // Find the selected region in the selected province
      const regionData = provinceData.regions.find(
        (data) => data.region === region,
      );
      if (!regionData) {
        return res.status(404).json({ error: 'Region not found' });
      }
      console.log('Region Data: ', regionData);
      // Extract stores from the selected regionData);

      // Extract stores from the selected region
      const stores = regionData.stores.map((storeData) => ({
        store: storeData.store,
      }));

      res.json({ stores });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch stores' });
    }
  },

  getBrands: function (req, res) {
    try {
      const { province, region, store } = req.body;

      // Read the JSON file
      const data = fs.readFileSync(dataFilePath, 'utf8');
      const jsonData = JSON.parse(data).provinces;

      // Find the selected province in the JSON data
      const provinceData = jsonData.find((data) => data.province === province);
      if (!provinceData) {
        return res.status(404).json({ error: 'Province not found' });
      }

      // Find the selected region in the selected province
      const regionData = provinceData.regions.find(
        (data) => data.region === region,
      );
      if (!regionData) {
        return res.status(404).json({ error: 'Region not found' });
      }

      // Find the selected store in the selected region
      const storeData = regionData.stores.find((data) => data.store === store);
      if (!storeData) {
        return res.status(404).json({ error: 'Store not found' });
      }

      // Extract brands from the selected store
      const brands = storeData.brands.map((brandData) => ({
        brand: brandData.brand,
      }));

      res.json({ brands });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch brands' });
    }
  },

  getProducts: function (req, res) {
    try {
      const { province, region, store, brand } = req.body;

      // Read the JSON file
      const data = fs.readFileSync(dataFilePath, 'utf8');
      const jsonData = JSON.parse(data).provinces;

      // Find the selected province in the JSON data
      const provinceData = jsonData.find((data) => data.province === province);
      if (!provinceData) {
        return res.status(404).json({ error: 'Province not found' });
      }

      // Find the selected region in the selected province
      const regionData = provinceData.regions.find(
        (data) => data.region === region,
      );
      if (!regionData) {
        return res.status(404).json({ error: 'Region not found' });
      }

      // Find the selected store in the selected region
      const storeData = regionData.stores.find((data) => data.store === store);
      if (!storeData) {
        return res.status(404).json({ error: 'Store not found' });
      }

      // Find the selected brand in the selected store
      const brandData = storeData.brands.find((data) => data.brand === brand);
      if (!brandData) {
        return res.status(404).json({ error: 'Brand not found' });
      }

      // Extract products from the selected brand
      const products = brandData.products.map((productData) => ({
        product: productData.product,
      }));

      res.json({ products });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  },
};
