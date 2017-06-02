class Queue
  attr_reader :arr_queue
  def initialize
    @arr_queue = []
  end

  def enqueue(ele)
    @arr_queue.push(ele)
  end

  def dequeue
    @arr_queue.shift
  end

  def show
    @arr_queue
  end

end

trial_queue = Queue.new
trial_queue.enqueue(5)
trial_queue.enqueue(10)
trial_queue.dequeue
p trial_queue.show
