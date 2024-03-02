import './style.css'
import 'reflect-metadata';
import { ROUTER, startApp } from './start-app/start-app.ts';
import { fromEvent } from 'rxjs';


startApp();


const button = document.querySelector('.load');

if (button) {
    fromEvent(button, 'click').subscribe(() => {
        ROUTER.uploadRoute('/');
    });
}


