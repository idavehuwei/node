const Bree = require("bree");

const bree = new Bree({
  jobs: [
    // runs the job on Start
    {
      name: "test",
      worker: {
        workerData: {
          foo: "bar",
          beep: "boop",
        },
      },
      // cron : '* * * * *'
      // timeout : '30s' //run the script after 30 seconds from the start
    },
  ],
});

bree.start();
