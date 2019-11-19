
async function syncLodash(){

    const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

    let s = _.join(['Hello', 'webpack'], ' ');

    return s;
}

export default syncLodash;
