/**
 * Global API endpoint URL conf.
 */
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const { PersonioCallApi } = require("../../controllers");

/**
 * Router with global prefix declaration
 */
const router = new Router({ prefix: "/endpoint/api" });

/**
 * Personio auth endpoint api route
 * API Route URL:
 * http://(host:port)/endpoint/api/personio
 */
router.get("/personio", bodyParser(), async ctx => {
  await PersonioCallApi(ctx);
});

module.exports = router;
