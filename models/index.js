// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.hasOne(ProductTag, {
  foreignKey: 'tag_id',
  onDelete: 'CASCADE',
});

Product.belongsToMany(ProductTag, {
  foreignKey: 'tag_id',
});

// Tags belongToMany Products (through ProductTag)
Product.hasOne(ProductTag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

ProductTag.belongsToMany(Product, {
  foreignKey: 'product_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
