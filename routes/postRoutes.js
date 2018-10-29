const postController = require('../controllers/postController');

module.exports = app => {
  app.post("/api/posts", async (req, res) => {
    const { artists, title, description, embed, tags } = req.body;

    const newPost = await postController.addPost({
      title,
      description,
      artists,
      embed,
      tags,
      user: req.user
    });

    res.send(newPost);
  });

  app.get('/api/posts', async (req, res) => {
    res.send(await postController.posts());
  });

  app.get('/api/posts/:id', async (req, res) => {
    res.send(await postController.post(req.params.id));
  });

  app.post('/api/posts/:id/vote', async (req, res) => {
    const { vote } = req.body;
    res.send(await postController.vote(req.params.id, vote, req.user));
  });

  app.post('/api/tags', async (req, res) => {
    res.send(await postController.tags(req.body.tags));
  });

  app.post('/api/tags/search', async (req, res) => {
    res.send(await postController.findTags(req.body.name))
  });
};
