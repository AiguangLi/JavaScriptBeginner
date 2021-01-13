function StopWatch() {
    let duration = 0;
    this.isRunning = false;
    let runningTime = 0;

    this.start = function () {
        if (this.isRunning) {
            console.error('Stop Watch is aready running!');
            return;
        }
        this.isRunning = true;
        runningTime = new Date().getTime();
    };

    this.stop = function () {
        if (!this.isRunning) {
            console.error('Stop Watch is not running!');
            return;
        }
        this.isRunning = false;
        duration = (new Date().getTime() - runningTime) / 1000;
        runningTime = 0;
    };

    this.reset = function () {
        duration = 0;
        this.isRunning = false;
        runningTime = 0;
    };

    // 定义私有成员访问属性方式1
    Object.defineProperty(this, 'duraion', {
        get: function () {
            return duration;
        },
    });

    // 禁止写
    Object.defineProperty(this, 'isRunning', {
        writable: false,
    });
}
