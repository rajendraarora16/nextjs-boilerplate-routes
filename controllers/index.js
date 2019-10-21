const { doConnectApi } = require("./auth/doConnectApi");
const { endpointErrorMsg } = require("../global.config");

module.exports = {
  /**
   * @function PersonioCallApi
   * @description Wrapper to call PersonioCallApi from auth.
   *
   */
  PersonioCallApi: async ctx => {
    const response = await doConnectApi();
    if (JSON.parse(response).data === null) {
      ctx.body = endpointErrorMsg;
    } else {
      ctx.body = response;
    }
  }
};
