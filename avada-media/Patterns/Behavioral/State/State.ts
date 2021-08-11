class VAR {

    private state: State;

    constructor(state: State) {
        this.transitionTo(state);
    }

    public transitionTo(state: State): void {
        console.log(`Программа посылает сигнал на ${(<any>state).constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }

    public request1(): void {
        this.state.on();
    }

    public request2(): void {
        this.state.off();
    }
}

abstract class State {
    protected rav: VAR;

    public setContext(rav: VAR) {
        this.rav = rav;
    }

    public abstract on(): void;

    public abstract off(): void;
}

class videoPlayer extends State {
    public on(): void {
        console.log('Видеопроигрыватель включаеться.');
        console.log('Для удобного просмотра нужно аудио.');
        this.rav.transitionTo(new audioPlayer());
    }

    public off(): void {
        console.log('Видеопроигрыватель выключаеться.');
    }
}

class audioPlayer extends State {
    public on(): void {
        console.log('Аудиопроигрыватель выключаеться.');
    }

    public off(): void {
        console.log('Аудиопроигрыватель включаеться.');
        console.log('Для удобства нужно совместить аудио и видео.');
        this.rav.transitionTo(new videoPlayer());
    }
}

const context = new VAR(new videoPlayer());
context.request1();
context.request2();