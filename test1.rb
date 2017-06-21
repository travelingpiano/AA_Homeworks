def pair_product?(arr,target)
  arr[0..-1].each_index do |indx|
    (indx+1...arr.length).each do |indx2|
      return true if arr[indx]*arr[indx2] == target
    end
  end
  false
end

p pair_product?([1,2,3,4], 10)
p pair_product?([],5)
p pair_product?([2,3,5,7],15)

def reverse_int(int)
  int.to_s.reverse.to_i
end

p reverse_int(532)
p reverse_int(4)

def thirds_product(arr)
  ans = 1
  arr.each_with_index do |ele,indx|
    ans *= ele if indx%3 == 2
  end
  ans
end

p thirds_product([1,3,5,7,15,2])

def how_many_likes(str)
  str = str.split(' ')
  count = 0
  str.each do |word|
    count += 1 if word == "like"
  end
  count
end

p how_many_likes("I really like this sandwich and this sandwich like me")
p how_many_likes("I hate sandwiches")
