# Do not modify these lines
__winc_id__ = '25596924dffe436da9034d43d0af6791'
__human_name__ = 'conditions'

# Add your code after this line

def farm_action(weather, time_of_day, cow_milking_status, location_of_cows, season, slurry_tank, grass_status):
    take_cows_indoors = 'take cows to cowshed'
    take_cows_outside = 'take cows back to pasture'
    if(weather == 'rainy' and location_of_cows == 'pasture' 
    or time_of_day == 'night' and location_of_cows == 'pasture' 
    or time_of_day == 'night' and weather == 'rainy' and location_of_cows == 'pasture'):
        return take_cows_indoors
    elif(cow_milking_status):
        if(location_of_cows == 'pasture'):
            return take_cows_indoors + '\nmilk cows\n' + take_cows_outside
        if(location_of_cows == 'shed'):
            return 'milk cows'
    elif(slurry_tank and weather == 'rainy' or slurry_tank and weather == 'neutral'):
        if(location_of_cows == 'pasture'):
            return take_cows_indoors + '\nfertilize pasture\n' + take_cows_outside
        if(location_of_cows == 'shed'):
            return 'fertilize pasture'
    elif(grass_status and season == 'spring' and weather == 'sunny'):
        if(location_of_cows == 'pasture'):
            return take_cows_indoors + '\nmow grass\n' + take_cows_outside
        if(location_of_cows == 'shed'):
            return 'mow grass'
    return 'wait'

print(farm_action('sunny', 'day', False, 'pasture', 'spring', False, True))