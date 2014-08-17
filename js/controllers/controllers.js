/**
 * Created with JetBrains PhpStorm.
 * User: James
 * Date: 10/08/14
 * Time: 09:06
 * To change this template use File | Settings | File Templates.
 */
define([
    'controllers/HeaderCtrl/HeaderCtrl',
    'controllers/HotelsCtrl/HotelsCtrl'

], function ( HeaderCtrl, HotelsCtrl ) {
    function Controllers(app, dataPath){
        this.app = app;
        this.dataPath = dataPath;

        HeaderCtrl(app);
        HotelsCtrl(app, dataPath);
    }
    return Controllers;
});