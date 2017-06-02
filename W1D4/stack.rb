class Stack
  attr_reader :arr_info
  def initialize
    # create ivar to store stack here!
    @arr_info = []
  end

  def add(el)
    # adds an element to the stack
    @arr_info.push(el)
  end

  def remove
    # removes one element from the stack
    @arr_info.pop
  end

  def show
    # return a copy of the stack
    @arr_info
  end
end

trial = Stack.new
trial.add(5)
trial.add(10)
trial.remove
p trial.show
