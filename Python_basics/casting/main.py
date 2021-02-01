# Do not modify these lines
__winc_id__ = '62311a1767294e058dc13c953e8690a4'
__human_name__ = 'casting'

# Add your code after this line

#part 1
leek_price = 2
print('Leek is ' + str(leek_price) + ' euros per kilo.')

#part 2
order = 'leek 4'
num_of_leeks = int(order[order.find('4'):])
sum_total = num_of_leeks *leek_price
print(sum_total)

#part 3
broccoli_price = 2.34
broccoli_order = 'broccoli 1.6'
num_of_broccolis = float(broccoli_order[broccoli_order.find('1'):])
sum_total_broccolis = broccoli_price * num_of_broccolis
print(str(num_of_broccolis) + 'kg broccoli costs ' + str(sum_total_broccolis) + 'e.')