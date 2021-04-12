'use strict';

shapes.forEach(el => el.style.backgroundColor = `${el.dataset.bg}`);
bgItems.forEach(el => el.style.backgroundImage = `url("${el.dataset.bg}")`);