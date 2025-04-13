const router = require('express').Router();
const auth = require('../middleware/auth');
const Task = require('../models/Task');

router.use(auth);

router.post('/', async (req, res) => {
  const task = await Task.create({ ...req.body, userId: req.user._id });
  res.status(201).json(task);
});

router.get('/', async (req, res) => {
  const { priority, dueDate, search, category } = req.query;
  let filter = { userId: req.user._id };
  if (priority) filter.priority = priority;
  if (dueDate) filter.dueDate = { $lte: new Date(dueDate) };
  if (category) filter.category = category;
  if (search) filter.title = { $regex: search, $options: 'i' };
  const tasks = await Task.find(filter);
  res.json(tasks);
});

router.get('/:id', async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, userId: req.user._id });
  if (!task) return res.status(404).json({ error: 'Not found' });
  res.json(task);
});

router.put('/:id', async (req, res) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id, userId: req.user._id }, req.body, { new: true });
  res.json(task);
});

router.delete('/:id', async (req, res) => {
  await Task.deleteOne({ _id: req.params.id, userId: req.user._id });
  res.json({ message: 'Deleted' });
});

module.exports = router;