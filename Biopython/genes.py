# -*- coding: utf-8 -*-
"""
Jakob Lopez and Samuel Mullins
11-25-2019

This program searches through a genbank file containing
the DNA sequence for Mycoplasma genitalium to find the different
genes spread throughout the bacteria. Genes begin with a start codon
ATG and end in either TAA, TAG or TGA. The length of a gene must be a
multiple of 3. Open Reading Frames are sequences of amino acids that
specify possible genes. To find ORFs, 3 different offsets are used.
With each offset, genes are the looked for in the same fashion, in 
groups of 3s. 

NOTE: In the output, negative ORFs are given. The negative value 
represents the genes found in the reverse complement of the DNA.
Genbank indexes starting at 1, which is why indices have a +/- 1.
"""

from Bio import SeqIO
import pprint as pp

def find_open_reading_frames(sequence, offset, reverse_complement):
    """
    Looks at an Open Reading Frame for a given offset in a sequence.
    All found ORFs get their start and ending indices saved to a list.
    
    Parameters:
        sequence - sequence to be searched
        offset - ORF offset
        reverse_complement - boolean to tell whether or not sequence is reverse complement
    
    Returns:
        list of gene indices
    """
    seq = sequence[offset:]
    seq = [str(seq[i:i+3]) for i in range(0, len(seq), 3)]
        
    start = 0
    searching = False
    genes = []
    
    for i, codon in enumerate(seq):
        if codon == "ATG" and not searching:
            searching = True
            start = i * 3 + offset
            
        elif codon in ('TAA', 'TAG', 'TGA') and searching:
            searching = False
            end = i * 3 + offset      
            if (end - start) >= 1000:           
                if reverse_complement:
                    end = (i + 1) * 3 + offset
                    
                    info = { "Start": sequence_length - end + 1,
                        "End": sequence_length - start}
                else:
                    info = { "Start": start + 1,
                            "End": end}
                    
                genes.append(info)
                  
    return genes


def output(genes, orf, out):
    """
    Outputs starting and ending indices for genes found in an ORF offset.
    
    Parameters:
        genes - array of dictionaries containing indices
        orf - ORF offset
        out - output file
    
    Returns:
        none
    """
    out.write("Reading Frame " + str(orf) + "\n")
    for gene in genes:
        start = gene['Start']
        end = gene['End']
        out.write("Start: {0} \t End: {1} \t Length: {2}\n".format(start, end, end - start))
    out.write("\n")
        
def output_strand_genes(strand, out, reverse_complement):
    """
    Outputs all ORF gene info
    
    Parameters:
        strand - DNA strand to be outputted
        out - output file
         reverse_complement: boolean to tell whether or not sequence is reverse complement
    
    Returns:
        none
    """
    for i in range(3):
        if reverse_complement:
            output(strand[i], -i, out)
        else:
            output(strand[i], i, out)
            
def translate_gene(indices):
    """
    Translates gene to amino acid sequence
    
    Parameters:
        indicies - dictionary containing start and end indices for a gene
  
    Returns:
        amino acid sequence
    """
    start = indices['Start'] -1
    end = indices['End'] + 3
    gene = sequence[start:end]
    return gene.translate(table="Bacterial", cds=True)
    
record = SeqIO.read("mycoplasma.gb", "genbank")
sequence = record.seq
sequence_length = len(sequence)

strand_1 = []
strand_2 = []
for i in range(3):
    strand_1.append(find_open_reading_frames(sequence, i, False))
    strand_2.append(find_open_reading_frames(sequence.reverse_complement(), i, True))


with open("output.txt", "w") as out:
    header = """
Jakob Lopez and Samuel Mullins
11-25-2019

This program searches through a genbank file containing
the DNA sequence for Mycoplasma genitalium to find the different
genes spread throughout the bacteria. Genes begin with a start codon
ATG and end in either TAA, TAG or TGA. The length of a gene must be a
multiple of 3. Open Reading Frames are sequences of amino acids that
specify possible genes. To find ORFs, 3 different offsets are used.
With each offset, genes are the looked for in the same fashion, in 
groups of 3s. 

NOTE: In the output, negative ORFs are given. The negative value 
represents the genes found in the reverse complement of the DNA.
Genbank indexes starting at 1, which is why indices have a +/- 1.\n
"""
    out.write(header)
    out.write("Here is the translation of the first gene found in ORF 0:\n{0}\n\n".format(translate_gene(strand_1[0][0])))
    output_strand_genes(strand_1, out, False)
    output_strand_genes(strand_2, out, True)
   