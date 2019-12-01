"""
Jakob Lopez and Samuel Mullins
11-30-2019
Genetic algorithm implementation to find a string of all 1s.
The chromosome length represents the number of bits for each 
individual in the population. Filling an array with random numbers
between 0 and 2^(chromsome length) and then converting them to binary
ensures that any number generated will not have more bits than specified. 
If the binary number does not have chromsome length number of bits, it is filled
with leading zeroes. Fittest parents are chosen using Roulette Wheel Selection
where fitness is determined by the number of 1s in the individual.
"""

import numpy as np
import random

def fitness(x):
    # Returns number of ones in binary number x
    return x.count("1")

def roulette_wheel_picker(fitnesses, total):
    """
    Chooses a parent based on roulette wheel selection

    Parameters:
        fitnesses - list of fitnesses
        total - total of fitnesses 
    
    Returns:
        index of chosen parent
    """
    picker = random.randrange(0, total)
    partial_sum = 0

    for i, fitness in enumerate(fitnesses):
        partial_sum += fitness
        if partial_sum > picker:
            return i
    
def crossover(parent1, parent2):
    # Returns a combination of 2 parents given a crossover point 
    crossover_point = random.randint(0, chromosome_length - 1)
    return parent1[:crossover_point] + parent2[crossover_point:]

def calculate_fitnesses(pop):
    # Returns a list of fitnesses given a population and the total of all fitnesses
    fitnesses = [fitness(parent) for parent in pop]
    total = sum(fitnesses)
    return fitnesses, total

def mutate(individual):
    """
    Mutates a random bit based off of mutation probability

    Parameters:
        inidividual - binary string not
    
    Returns:
        individual with single bit change or same individual
    """
    chance = random.random()
    if chance < mutation_rate:
        # Individual is a binary string, so convert to integer
        individual = int(individual, base=2)
        mutated_bit = random.randint(0, chromosome_length - 1)
        # Flip bit at randomly generate index
        individual = individual ^ (1 << mutated_bit)
        return int_to_binary_string(individual)
    return individual

def int_to_binary_string(number):
    # Returns an integer as binary string not including leading 0b
    return bin(number)[2:].zfill(chromosome_length)

def next_generation(population):
    fitnesses, total_fitness = calculate_fitnesses(population)
    
    new_population = []

    # Create children for next generation
    for _ in range(number_of_children):
        child = None

        # If child results from breeding
        if random.random() < crossover_rate:
            parent1 = population[roulette_wheel_picker(fitnesses, total_fitness)]
            parent2 = population[roulette_wheel_picker(fitnesses, total_fitness)]
            child = crossover(parent1, parent2)
        else:
            parent = population[roulette_wheel_picker(fitnesses, total_fitness)]
            child = parent

        child = mutate(child)
        new_population.append(child)
    return new_population.copy(), fitnesses

"""===============================  MAIN ==============================="""     
population_size = 100
chromosome_length = 20
crossover_rate = 0.7
mutation_rate = 0.001
number_of_generations = 20
number_of_children = 40

max_number = pow(2, chromosome_length)

# Fill initial population with random binary numbers of length chromosome_length
population = [int_to_binary_string(random.randrange(0,max_number)) for _ in range(population_size)]

for generation in range(number_of_generations):
    population, fitnesses = next_generation(population)
    print("Generation: {0} \tBest fitness {1}".format(generation + 1, max(fitnesses) ))
