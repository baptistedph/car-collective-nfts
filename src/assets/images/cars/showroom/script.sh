i=1
for image in *.jpg
do
  mv $image $i.jpg
  ((i+=1))
done
