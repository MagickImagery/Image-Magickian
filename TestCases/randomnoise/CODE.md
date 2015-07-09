$ convert -size 100x100 xc: +noise Random noisea.png
$ convert -size 100x100 xc: +noise Random noiseb.png
$ convert -size 100x100 xc: +noise Random noisec.png
$ convert -size 100x100 xc: +noise Random noised.png
$ convert -size 100x100 xc: +noise Random noisee.png
$ convert -size 100x100 xc: +noise Random noisef.png
$ convert -size 100x100 xc: +noise Random noiseg.png
$ convert -size 100x100 xc: +noise Random noiseh.png
$ convert -size 100x100 xc: +noise Random noisei.png
$ convert -size 100x100 xc: +noise Random noisej.png
$ convert -size 100x100 xc: +noise Random noisek.png

$ convert -delay 5 -loop 0 noise*.png shhhhh.gif