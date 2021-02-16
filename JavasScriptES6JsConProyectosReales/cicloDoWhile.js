let i = -1;
do {
    i++;
    if (i === 5) {
        continue;
    }
    console.log(`Valor de i: ${i}`);
} while (i < 10);