module.exports = {
    apps: [ {
        name : 'emax_funeral',
        script : './server.js',
        instances : 0,
        exec_mode : 'cluster',
        wait_ready : true,
        listen_timeout : 50000,
        watch : true,
        log_date_format : "YYYY-MM-DD HH:mm:ss Z"
    }]
}