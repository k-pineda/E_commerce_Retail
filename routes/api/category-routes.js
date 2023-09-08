const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id',async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No location found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newCategory= await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  const updateCategory= await Category.update(req.body,{   
    where: {
      id: req.params.id,
    },
    }).catch((error) => res.json(error));
    res.json(updateCategory);
});

router.delete('/:id', async (req, res) => {
  try {
const categoryId = req.params.id;
const deletedCategory = await Category.findByPk(categoryId);
if (!deletedCategory) {
  res.status(404).json({ message: 'Category not found' });
  return;
}
await Category.destroy({
  where: {
    id: categoryId,
  },
});
res.status(200).json({ message: 'Category deleted successfully' });
} catch (err) {
console.error(err);
res.status(500).json(err);
}
});



module.exports = router;
