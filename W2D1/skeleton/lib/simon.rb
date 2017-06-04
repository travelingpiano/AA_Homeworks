class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    unless game_over
      @sequence_length += 1
      round_success_message
    end
  end

  def show_sequence
    add_random_color
  end

  def require_sequence
    puts "please input your sequence"
    player_ans = gets.chomp

  end

  def add_random_color
    color = ['blue','red','yellow','green']
    seq << color[rand(4)]
  end

  def round_success_message
    puts "you've succeeded"
  end

  def game_over_message
    puts "sorry you've failed"
  end

  def reset_game
    @seq = []
    @sequence_length = 1
    @game_over = false
  end
end
