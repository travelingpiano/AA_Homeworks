class LRUCache
  attr_reader :cache_hash, :cache_list, :capacity
  def initialize(cap)
    @cache_hash = {}
    @capacity = cap
  end

  def count
    return @cache_hash.length
  end

  def add(el)
    #make new linked list if empty
    unless @cache_list
      new_node = LinkedList.new(el)
      @cache_hash[el] = new_node
      @cache_list = new_node
      #if not full, add to list
    else
      unless @cache_hash.length == @capacity
        add_to_list(el)
      else
        #remove from list
        puts "remove"
        @cache_hash.delete(@cache_list.value)
        new_head = @cache_list.next
        @cache_list = nil
        @cache_list = new_head
        add_to_list(el)
      end
    end
  end

  def show

  end

  private
  def add_to_list(el)
    last_node = @cache_list
    new_linkednode = LinkedList.new(el)
    while last_node.next
      last_node = last_node.next
    end
    last_node.next = new_linkednode
    @cache_hash[el] = new_linkednode
  end

end

class LinkedList
  attr_accessor :next, :value
  def initialize(value,nx=nil)
    @next = nx
    @value = value

  end
end
