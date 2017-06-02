class Map
  attr_reader :hash_map
  def initialize
    @hash_map = {}
  end

  def assign(key,value)
    @hash_map[key] = value
  end

  def lookup(key)
    if @hash_map[key]
      @hash_map[key]
    else
      raise "you are stupid"
    end
  end

  def remove(key)
    @hash_map.delete(key)
  end

  def show
    @hash_map
  end
end

trial_map = Map.new
trial_map.assign("one",1)
trial_map.assign("two",2)
p trial_map.lookup("one")
#p trial_map.lookup("three")
trial_map.remove("one")
p trial_map.show
