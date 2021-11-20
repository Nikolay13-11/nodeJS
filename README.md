# nodeJS CLI Tool

### Установка приложения:

**Произвести npm install**


### Запуск приложения:
**Запуск приложения производится командой node index + параметры**

### CLI tool принимает 3 параметра:
- `1.`  **-c, --config, записывается в следующем формате {XY(-)}n, где:**
    * `X` :
        *  `A` ***- шифр Атбаш***
        *  `C` ***- шифр Цезаря со сдвигом на 1 символ***
        *  `R` ***- шифр Цезаря со сдвигом на 8 символов***
    * `Y` **- не используется в шифре Атбаш(A), используется только в шифре Цезаря(С, R):**
        *  `1` ***- используется для кодирования файла***
        *  `0` ***- используется для декодирования файла***
- `2.`  **-i, --input: указывает путь к входному файлу**
- `3.`  **-o, --output: указывает путь к выходному файлу**

## Передача параметров
+ `--c, --config` ***- обязательный для ввода параметр***
+  `-i, --input` ***- не является обязательным для ввода параметром, при отсутствии программа предложит ввести текст для шифрования в терминал***
+ `-o, --output` ***- не является обязательным для ввода параметром, при отсутствии программа выведет результат шифрования в терминал***

## Примеры использования

```bash
node index -c C1-C1-R0-A -i "input.txt" -o "output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`
> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`
```bash
$ node index -c "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`
> output.txt
> `Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!`
```bash
node index -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`
> output.txt
> `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`
```bash
node index -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1" -i "./input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`
> output.txt
> `This is secret. Message about "_" symbol!`

```bash
node index -c "A-A-A-R1-R0-R0-R0-C1-C1-A" -i "./input.txt"
```
> input.txt
> `This is secret. Message about "_" symbol!`
> stdout (терминал)
> `Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!`


