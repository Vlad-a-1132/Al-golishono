"use client";

import { useEffect } from 'react';

export default function Snowfall() {
  useEffect(() => {
    // Настройки скрипта
    const snowmax = 35;
    const snowcolor = ["#AAAACC", "#DDDDFF", "#CCCCDD", "#F3F3F3", "#F0FFFF", "#FFFFFF", "#EFF5FF"];
    const snowtype = ["Arial Black", "Arial Narrow", "Times", "Comic Sans MS"];
    const snowletter = "*";
    const sinkspeed = 0.6;
    const snowmaxsize = 40;
    const snowminsize = 8;
    const snowingzone = 1;

    const snow: HTMLSpanElement[] = [];
    let marginbottom: number;
    let marginright: number;
    let timer: NodeJS.Timeout;
    const x_mv: number[] = [];
    const crds: number[] = [];
    const lftrght: number[] = [];

    function randommaker(range: number): number {
      return Math.floor(range * Math.random());
    }

    function initsnow() {
      marginbottom = window.innerHeight;
      marginright = window.innerWidth;

      const snowsizerange = snowmaxsize - snowminsize;
      for (let i = 0; i <= snowmax; i++) {
        crds[i] = 0;
        lftrght[i] = Math.random() * 15;
        x_mv[i] = 0.03 + Math.random() / 10;
        
        const snowElement = document.getElementById(`s${i}`);
        if (snowElement) {
          snow[i] = snowElement as HTMLSpanElement;
          snow[i].style.fontFamily = snowtype[randommaker(snowtype.length)];
          const size = randommaker(snowsizerange) + snowminsize;
          snow[i].style.fontSize = size + "px";
          snow[i].style.color = snowcolor[randommaker(snowcolor.length)];
          (snow[i] as any).sink = sinkspeed * size / 5;
          
          if (snowingzone === 1) {
            (snow[i] as any).posx = randommaker(marginright - size);
          }
          if (snowingzone === 2) {
            (snow[i] as any).posx = randommaker(marginright / 2 - size);
          }
          if (snowingzone === 3) {
            (snow[i] as any).posx = randommaker(marginright / 2 - size) + marginright / 4;
          }
          if (snowingzone === 4) {
            (snow[i] as any).posx = randommaker(marginright / 2 - size) + marginright / 2;
          }
          (snow[i] as any).posy = randommaker(2 * marginbottom - marginbottom - 2 * size);
          snow[i].style.left = (snow[i] as any).posx + "px";
          snow[i].style.top = (snow[i] as any).posy + "px";
        }
      }
      movesnow();
    }

    function movesnow() {
      for (let i = 0; i <= snowmax; i++) {
        if (snow[i]) {
          crds[i] += x_mv[i];
          (snow[i] as any).posy += (snow[i] as any).sink;
          snow[i].style.left = (snow[i] as any).posx + lftrght[i] * Math.sin(crds[i]) + "px";
          snow[i].style.top = (snow[i] as any).posy + "px";

          if ((snow[i] as any).posy >= marginbottom - 2 * parseInt(snow[i].style.fontSize) || 
              parseInt(snow[i].style.left) > (marginright - 3 * lftrght[i])) {
            const size = parseInt(snow[i].style.fontSize);
            if (snowingzone === 1) {
              (snow[i] as any).posx = randommaker(marginright - size);
            }
            if (snowingzone === 2) {
              (snow[i] as any).posx = randommaker(marginright / 2 - size);
            }
            if (snowingzone === 3) {
              (snow[i] as any).posx = randommaker(marginright / 2 - size) + marginright / 4;
            }
            if (snowingzone === 4) {
              (snow[i] as any).posx = randommaker(marginright / 2 - size) + marginright / 2;
            }
            (snow[i] as any).posy = 0;
          }
        }
      }
      timer = setTimeout(movesnow, 50);
    }

    // Создаем элементы снежинок
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    
    for (let i = 0; i <= snowmax; i++) {
      const span = document.createElement('span');
      span.id = `s${i}`;
      span.style.position = 'absolute';
      span.style.top = `-${snowmaxsize}px`;
      span.textContent = snowletter;
      container.appendChild(span);
    }
    
    document.body.appendChild(container);

    // Инициализация снегопада
    initsnow();

    // Обработка изменения размера окна
    const handleResize = () => {
      marginbottom = window.innerHeight;
      marginright = window.innerWidth;
    };
    window.addEventListener('resize', handleResize);

    // Очистка
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  }, []);

  return null;
}

