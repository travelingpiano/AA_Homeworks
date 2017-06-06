class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14)
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    cups.each_index do |indx|
      if indx%7 == 6
        cups[indx] = []
      else
        cups[indx] = [:stone, :stone, :stone, :stone]
      end
    end
  end

  def valid_move?(start_pos)
    if start_pos <1 || start_pos>14
      raise "Invalid starting cup"
    end
    true
  end

  def make_move(start_pos, current_player_name)
    if valid_move?(start_pos+1)
      num_stones = cups[start_pos].length
      cups[start_pos] = []
      store_cup = 0
      if current_player_name ==@name1
        store_cup = 13
      else
        store_cup = 6
      end
      indx = (start_pos+1)%14
      while num_stones > 0
        unless indx == store_cup
          cups[indx] << :stone
          num_stones -= 1
        end
        indx+= 1
        indx = indx%14
      end
      render
      next_turn(indx)
      return :prompt if (indx-1)%14 == (store_cup+7)%14
      return :switch if cups[indx-1].length == 1

      return indx-1 if cups[indx-1].length > 1
    end

  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    return true if cups[0..5].all?{|el| el.empty?} || cups[7..12].all?{|el| el.empty?}
    false
  end

  def winner
    if cups[6].length>cups[13].length
      return @name1
    elsif cups[6].length < cups[13].length
      return @name2
    else
      return :draw
    end
  end
end
