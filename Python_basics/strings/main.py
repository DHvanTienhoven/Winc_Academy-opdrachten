# Do not modify these lines
__winc_id__ = '71dd124b4a6e4d268f5973db521394ee'
__human_name__ = 'strings'

# Add your code after this line

player_one = 'Ruud Gullit'
player_two = 'Marco van Basten'
goal_0 = 32
goal_1 = 54
scorers = player_one + ' ' + str(goal_0) + ' , ' + player_two + ' ' + str(goal_1)
report = f'{player_one} scored in the {goal_0}th minute \n{player_two} scored in the {goal_1}th minute'
player = 'Wilbert Suvrijn' #part 2.1
first_name = player[:player.find(' ')] #part 2.2
last_name_len = len(player[player.find(' '):])-1 #part 2.3
name_short = f"{player[0]}.{player[player.find(' '):]}" #part 2.4
chant = f' {first_name}!'*5 #part2.5
good_chant = chant[len(chant) -1] != ' ' #part2.6

